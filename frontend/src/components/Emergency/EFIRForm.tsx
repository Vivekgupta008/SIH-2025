"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Tourist } from "@/utils/api";
import { PDFGenerator } from "@/utils/pdfGenerator";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MicIcon from "@mui/icons-material/Mic";
import StopCircleIcon from "@mui/icons-material/StopCircle";

interface EFIRFormProps {
  tourists: Tourist[];
}

export default function EFIRForm({ tourists }: EFIRFormProps) {
  const [touristId, setTouristId] = useState<number | "none">("none");
  const [reporterName, setReporterName] = useState("");
  const [reporterContact, setReporterContact] = useState("");
  const [lastSeenLocation, setLastSeenLocation] = useState("");
  const [lastSeenDateTime, setLastSeenDateTime] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<any | null>(null);

  const SpeechRecognitionImpl = useMemo(() => {
    const SR = (typeof window !== "undefined" && ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)) as any;
    return SR;
  }, []);

  useEffect(() => {
    if (!SpeechRecognitionImpl) return;
    const recog = new SpeechRecognitionImpl();
    recog.continuous = false;
    recog.lang = "en-IN";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onresult = (event: any) => {
      const transcript = event.results[0]?.[0]?.transcript ?? "";
      setDescription((prev) => (prev ? prev + " " + transcript : transcript));
    };
    recog.onerror = () => setListening(false);
    recog.onend = () => setListening(false);
    recognitionRef.current = recog;
    return () => {
      try { recog.abort(); } catch {}
      recognitionRef.current = null;
    };
  }, [SpeechRecognitionImpl]);

  function toggleDictation(): void {
    if (!recognitionRef.current) return;
    if (listening) {
      try { recognitionRef.current.stop(); } catch {}
      setListening(false);
    } else {
      try { recognitionRef.current.start(); setListening(true); } catch {}
    }
  }

  async function handleGenerate(): Promise<void> {
    if (touristId === "none") {
      setError("Please select a tourist.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      const tourist = tourists.find((t) => t.id === Number(touristId));
      if (!tourist) throw new Error("Tourist not found");

      const doc = await PDFGenerator.generateTouristReport(tourist, []);
      const pageWidth = doc.internal.pageSize.getWidth();
      let y = 20;

      doc.addPage();
      doc.setFontSize(18);
      doc.setFont("helvetica", "bold");
      doc.text("E-FIR: Missing Person Report", pageWidth / 2, y, { align: "center" });
      y += 12;

      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.text(`Reporter Name: ${reporterName || "N/A"}`, 20, y); y += 7;
      doc.text(`Reporter Contact: ${reporterContact || "N/A"}`, 20, y); y += 7;
      doc.text(`Subject Tourist: ${tourist.name} (ID ${tourist.id})`, 20, y); y += 7;
      doc.text(`Last Seen Location: ${lastSeenLocation || "N/A"}`, 20, y); y += 7;
      doc.text(`Last Seen Date/Time: ${lastSeenDateTime || "N/A"}`, 20, y); y += 7;
      doc.text(`Description (typed/voice):`, 20, y); y += 7;

      const descriptionLines = doc.splitTextToSize(description || "N/A", pageWidth - 40);
      doc.text(descriptionLines, 20, y);

      PDFGenerator.downloadPDF(doc, `efir_missing_person_${tourist.id}.pdf`);
    } catch (e) {
      setError("Failed to generate E-FIR. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card
      variant="outlined"
      elevation={0}
      className="border border-gray-700 rounded-2xl"
      sx={{ bgcolor: 'background.paper' }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={700} color="text.primary" mb={2}>Automated E-FIR (Missing Person)</Typography>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
        }}>
          <Box>
            <FormControl fullWidth size="small" variant="filled">
              <InputLabel id="efir-tourist">Select Tourist</InputLabel>
              <Select
                labelId="efir-tourist"
                label="Select Tourist"
                value={touristId}
                onChange={(e) => setTouristId(e.target.value === "none" ? "none" : Number(e.target.value))}
              >
                <MenuItem value="none">Select tourist</MenuItem>
                {tourists.map((t) => (
                  <MenuItem key={t.id} value={t.id}>{t.name} (#{t.id})</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <TextField size="small" fullWidth label="Reporter Name" value={reporterName} onChange={(e) => setReporterName(e.target.value)} variant="filled" InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }} />
          </Box>
          <Box>
            <TextField size="small" fullWidth label="Reporter Contact" value={reporterContact} onChange={(e) => setReporterContact(e.target.value)} variant="filled" InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }} />
          </Box>
          <Box>
            <TextField size="small" fullWidth label="Last Seen Location" value={lastSeenLocation} onChange={(e) => setLastSeenLocation(e.target.value)} variant="filled" InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }} />
          </Box>
          <Box>
            <TextField size="small" type="datetime-local" fullWidth label="Last Seen Date/Time" InputLabelProps={{ shrink: true }} value={lastSeenDateTime} onChange={(e) => setLastSeenDateTime(e.target.value)} variant="filled" InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }} />
          </Box>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <TextField
                label="Additional Description (typed/voice)"
                fullWidth
                multiline
                minRows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                variant="filled"
                InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }}
              />
              {SpeechRecognitionImpl && (
                <IconButton color={listening ? "error" : "primary"} onClick={toggleDictation} aria-label="dictate">
                  {listening ? <StopCircleIcon /> : <MicIcon />}
                </IconButton>
              )}
            </Stack>
            <Typography variant="caption" color="text.secondary">Characters: {description.length}</Typography>
          </Box>

          <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" gutterBottom>Preview</Typography>
            <Stack spacing={0.5} sx={{ typography: 'body2', color: 'text.secondary' }}>
              <div>Tourist: {touristId === "none" ? '—' : `#${touristId}`}</div>
              <div>Reporter: {reporterName || '—'} ({reporterContact || '—'})</div>
              <div>Last Seen: {lastSeenLocation || '—'} | {lastSeenDateTime || '—'}</div>
              <div>Description: {description || '—'}</div>
            </Stack>
          </Box>

          <Box sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}>
            {error && (
              <Typography variant="body2" color="error" mb={1}>{error}</Typography>
            )}
            <Button onClick={handleGenerate} disabled={submitting} variant="contained">
              {submitting ? "Generating..." : "Generate E-FIR PDF"}
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}



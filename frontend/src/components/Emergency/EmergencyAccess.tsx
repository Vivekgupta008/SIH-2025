"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { apiClient, Alert, Tourist } from "@/utils/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";

type Severity = "low" | "medium" | "high" | "critical";

interface EmergencyAccessProps {
  tourists: Tourist[];
  onAlertCreated?: (alert: Alert) => void;
}

export default function EmergencyAccess({ tourists, onAlertCreated }: EmergencyAccessProps) {
  const [selectedTouristId, setSelectedTouristId] = useState<number | "none">("none");
  const [severity, setSeverity] = useState<Severity>("critical");
  const [message, setMessage] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const recognitionRef = useRef<any | null>(null);
  const [submitting, setSubmitting] = useState(false);

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
      setMessage((prev) => (prev ? prev + " " + transcript : transcript));
    };
    recog.onerror = (e: any) => {
      setError(e.error || "Voice recognition error");
      setIsListening(false);
    };
    recog.onend = () => {
      setIsListening(false);
    };
    recognitionRef.current = recog;
    return () => {
      try {
        recog.abort();
      } catch {}
      recognitionRef.current = null;
    };
  }, [SpeechRecognitionImpl]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError("Voice recognition not supported in this browser.");
      return;
    }
    setError(null);
    setIsListening(true);
    try {
      recognitionRef.current.start();
    } catch {
      setIsListening(false);
    }
  }, []);

  const stopListening = useCallback(() => {
    try {
      recognitionRef.current?.stop();
    } catch {}
    setIsListening(false);
  }, []);

  async function submitEmergency(): Promise<void> {
    if (!message.trim()) {
      setError("Please enter or dictate the emergency message.");
      return;
    }
    if (selectedTouristId === "none") {
      setError("Please select a tourist.");
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const created = await apiClient.createAlert({
        tourist_id: Number(selectedTouristId),
        alert_type: "emergency",
        message: message.trim(),
        severity,
        is_resolved: "false",
      } as any);
      onAlertCreated?.(created);
      setMessage("");
    } catch (e) {
      setError("Failed to submit emergency. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Card
      variant="outlined"
      elevation={0}
      className="border border-gray-700 rounded-2xl"
      sx={{ width: '100%', bgcolor: 'background.paper' }}
    >
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
          <Typography variant="h6" fontWeight={700} color="text.primary">Emergency Access (Voice/Text)</Typography>
          {SpeechRecognitionImpl ? (
            isListening ? (
              <Button onClick={stopListening} color="error" size="small" variant="contained">Stop</Button>
            ) : (
              <Button onClick={startListening} color="success" size="small" variant="contained">Voice Input</Button>
            )
          ) : (
            <Typography variant="caption" color="text.secondary">Voice not supported</Typography>
          )}
        </Stack>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr auto' },
          gap: 2,
          mb: 2,
        }}>
          <FormControl fullWidth size="small" variant="filled">
            <InputLabel id="ea-tourist">Select tourist</InputLabel>
            <Select
              labelId="ea-tourist"
              label="Select tourist"
              value={selectedTouristId}
              onChange={(e) => setSelectedTouristId(e.target.value === "none" ? "none" : Number(e.target.value))}
            >
              <MenuItem value="none">Select tourist</MenuItem>
              {tourists.map((t) => (
                <MenuItem key={t.id} value={t.id}>{t.name} (#{t.id})</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth size="small" variant="filled">
            <InputLabel id="ea-severity">Severity</InputLabel>
            <Select
              labelId="ea-severity"
              label="Severity"
              value={severity}
              onChange={(e) => setSeverity(e.target.value as Severity)}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Button
              onClick={submitEmergency}
              disabled={submitting}
              variant="contained"
              sx={{ whiteSpace: 'nowrap', height: '100%' }}
            >
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </Box>
        </Box>

        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe the emergency (you can also use Voice Input)"
          fullWidth
          multiline
          minRows={4}
          variant="filled"
          InputProps={{ sx: { bgcolor: 'rgba(255,255,255,0.03)', borderRadius: 2 } }}
          InputLabelProps={{ sx: { color: 'text.secondary' } }}
        />

        {error && (
          <Typography variant="body2" color="error" mt={1}>{error}</Typography>
        )}
      </CardContent>
    </Card>
  );
}



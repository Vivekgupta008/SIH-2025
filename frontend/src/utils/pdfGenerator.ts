import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Tourist, Alert } from './api';

export class PDFGenerator {
  static async generateTouristReport(tourist: Tourist, alerts: Alert[]) {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    let yPosition = 20;

    // Header
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('Tourist Safety Report', pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, pageWidth / 2, yPosition, { align: 'center' });
    yPosition += 20;

    // Tourist Information
    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Tourist Information', 20, yPosition);
    yPosition += 10;

    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`Name: ${tourist.name}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Email: ${tourist.email}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Phone: ${tourist.phone || 'N/A'}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Status: ${tourist.status}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Coordinates: ${tourist.latitude}, ${tourist.longitude}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Last Update: ${new Date(tourist.last_location_update).toLocaleString()}`, 20, yPosition);
    yPosition += 15;

    // Alerts Section
    if (alerts.length > 0) {
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('Recent Alerts', 20, yPosition);
      yPosition += 10;

      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      
      alerts.slice(0, 10).forEach((alert, index) => {
        if (yPosition > pageHeight - 30) {
          doc.addPage();
          yPosition = 20;
        }
        
        doc.text(`${index + 1}. ${alert.alert_type} - ${alert.severity}`, 20, yPosition);
        yPosition += 5;
        doc.text(`   Message: ${alert.message}`, 20, yPosition);
        yPosition += 5;
        doc.text(`   Date: ${new Date(alert.created_at).toLocaleString()}`, 20, yPosition);
        yPosition += 8;
      });
    }

    // Footer
    const totalPages = doc.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - 30, pageHeight - 10);
    }

    return doc;
  }

  static async generateDashboardSnapshot(elementId: string, filename: string = 'dashboard-snapshot.pdf') {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF('p', 'mm', 'a4');
    
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
    const finalWidth = imgWidth * ratio;
    const finalHeight = imgHeight * ratio;
    
    doc.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight);
    
    return doc;
  }

  static downloadPDF(doc: jsPDF, filename: string) {
    doc.save(filename);
  }
}

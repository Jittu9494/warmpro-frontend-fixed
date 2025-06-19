import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function PdfDownload({ job }) {
  const handleDownload = async () => {
    const element = document.getElementById(`job-${job.id}`);
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Job-${job.id}.pdf`);
  };

  return <button onClick={handleDownload}>Download PDF</button>;
}

export default PdfDownload;

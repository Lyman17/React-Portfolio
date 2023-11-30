import React from 'react';
import html2pdf from 'Lyman_Resume_LinkedIn.pdf';

const Resume = () => {
  const downloadPDF = () => {
    const element = document.getElementById('resume-container');

    const pdfOptions = {
      margin: 10,
      filename: 'Lyman_Resume_Linkedin',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(element, pdfOptions);
  };

  return (
    <div>
      <div id="resume-container" className="text-white text-lg">
        <h1>Brian Lyman</h1>
        <p>I have been a Real Estate Investment professional for the past 17 years and have recently been full stack certified by the University of Utah.</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <button onClick={downloadPDF} className="bg-blue-500 text-white text-lg px-4 py-2 rounded hover:bg-blue-600">
        Download PDF
      </button>
    </div>
  );
};

export default Resume;
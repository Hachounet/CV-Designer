import React from 'react';

export default function PrintBtn() {
  const handlePrint = () => {
    const CV = document.getElementsByClassName('CV-class')[0];

    if (CV) {
      const buttons = CV.querySelectorAll('button');
      buttons.forEach((button) => button.remove());

      const printWindow = window.open('', '', 'height=600,width=800');
      printWindow.document.write('<html><head><title>Print CV</title>');
      printWindow.document.write(
        '<link rel="stylesheet" href="./src/CVPrint.css" />'
      );

      printWindow.document.write('</head><body>');
      printWindow.document.write(`<div class="CV-class">${CV.innerHTML}</div>`);
      printWindow.document.write('</body></html>');

      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.print();
      };
    } else {
      console.error('CV element not found');
    }
  };

  return (
    <button onClick={handlePrint}>
      <span>Print CV</span>
    </button>
  );
}

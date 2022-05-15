import React from "react";
import PDFJS from;

interface OwnProps {
  children: any;
}

const ConvertPDF: React.FC<OwnProps> = (props) => {
  const [self, setSelf] = React.useState(0);
  // setSelf(complete);
  const pdfToText = (data: any) => {
      const viewer = document.getElementById('viewer');
       // render the first pages
      const pdf = new PDFJS.PDFDoc(data) ;
  };

  return <div></div>;
};

export default ConvertPDF;

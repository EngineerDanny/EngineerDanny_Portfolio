import { Document, Page } from "react-pdf";
import resume from "../assets/resume.pdf";

function ResumePage() {
  function onDocumentLoadSuccess() {
      console.log("It has loaded");
  }

  return (
    <div>
      This is my resume
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={0} />
      </Document>
    </div>
  );
}

export default ResumePage;

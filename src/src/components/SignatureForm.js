import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import api from "../api/axios";

function SignatureForm({ jobId }) {
  const sigRef = useRef();

  const handleSave = async () => {
    const dataUrl = sigRef.current.getTrimmedCanvas().toDataURL("image/png");
    try {
      await api.post(`/jobs/${jobId}/signature`, { signature: dataUrl });
      alert("Signature saved!");
    } catch (err) {
      console.error("Saving signature failed:", err);
      alert("Could not save signature.");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <p>Customer Signature:</p>
      <SignatureCanvas
        penColor="black"
        canvasProps={{ width: 300, height: 100, className: "sigCanvas" }}
        ref={sigRef}
      />
      <div>
        <button onClick={() => sigRef.current.clear()}>Clear</button>
        <button onClick={handleSave}>Save Signature</button>
      </div>
    </div>
  );
}

export default SignatureForm;

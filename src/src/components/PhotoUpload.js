import React, { useState } from "react";
import api from "../api/axios";

function PhotoUpload({ jobId }) {
  const [file, setFile] = useState(null);
  const [stage, setStage] = useState("pre");

  const handleUpload = async () => {
    if (!file) return alert("No file selected");
    const formData = new FormData();
    formData.append("photo", file);
    formData.append("stage", stage);

    try {
      await api.post(`/jobs/${jobId}/photos`, formData);
      alert("Photo uploaded!");
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <select value={stage} onChange={(e) => setStage(e.target.value)}>
        <option value="pre">Pre</option>
        <option value="mid">Mid</option>
        <option value="post">Post</option>
      </select>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default PhotoUpload;

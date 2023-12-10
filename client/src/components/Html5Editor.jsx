import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Html5Editor = ({ onDataChanged }) => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
    onDataChanged(value);
  };

  const defaultEditorHeight = "150px"; // Adjust the default height as needed

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      placeholder="Type the content of your post here..."
      style={{ height: defaultEditorHeight }}
      modules={{
        toolbar: [
          [{ header: [1, 2, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["clean"],
          ["code-block"],
          [{ align: ["", "center", "right", "justify"] }],
          ["link"],
        ],
        clipboard: {
          matchVisual: false,
        },
      }}
      theme="snow"
    />
  );
};

export default Html5Editor;

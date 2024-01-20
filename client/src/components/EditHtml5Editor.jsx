import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Html5Editor = ({ onDataChanged, value }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(value);
  }, [value]);

  const handleChange = (newValue) => {
    setContent(newValue);
    onDataChanged(newValue);
  };

  const defaultEditorHeight = "200px"; // Adjust the default height as needed

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

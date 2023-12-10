import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Html5Editor = ({ onDataChanged }) => {
  const [content, setContent] = useState("");
  const reactQuillRef = useRef(null);

  const handleChange = (value) => {
    setContent(value);
    onDataChanged(value);
  };

  return (
    <div>
      <ReactQuill
        ref={reactQuillRef}
        value={content}
        onChange={handleChange}
        placeholder="Type the content of your post here..."
        modules={{
          toolbar: [
            [{ font: [] }],

            [{ header: [1, 2, 3, 4, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image", "video"],
            ["blockquote"],
            ["clean"],
            ["code-block"],
            [{ align: ["", "center", "right", "justify"] }],
          ],
          clipboard: {
            matchVisual: true,
          },
        }}
      />
    </div>
  );
};

export default Html5Editor;

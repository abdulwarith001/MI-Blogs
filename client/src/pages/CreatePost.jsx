import React, { useState } from "react";
import Wrapper from "../assets/wrappers/CreatePost";
import { Form, useNavigate } from "react-router-dom";
import { Input, Html5Editor } from "../components";
import { useCreatePostMutation } from "../slices/blogApiSlice";
import Loader from "../components/Loading";


const CreatePost = () => {
  const [create_blog, {isLoading}] = useCreatePostMutation();
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState('')
  const [image, setImage] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  // const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate()

  const handleEditorDataChange = (data) => {
    setEditorContent(data);
  };

 const handleSubmit = async (e) => {
   e.preventDefault();
   try {
     const formData = new FormData();

     formData.append("title", title);
     formData.append("content", editorContent);

      for (let i = 0; i < image.length; i++) {
        formData.append(`image`, image[i]);
      }

     const res = await create_blog(formData).unwrap();
     navigate('/dashboard/posts')
   } catch (error) {
      setErrorMsg(error?.data?.message || error.error);
   }
 };

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    setImage(selectedImages);
  };

  return (
    <Wrapper>
      {isLoading && <Loader text="Creating post..." />}
      <h4>Create new Post</h4>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {/* {successMsg && <div className="alert alert-success">{successMsg}</div>} */}

      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <Input
            type="text"
            label="Title"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            type="file"
            label="Cover Photo"
            name="image"
            value={image}
            onChange={handleImageChange}
          />

          <br></br>
          <label>Content</label>
          <Html5Editor name="content" onDataChanged={handleEditorDataChange} />

          <button type="submit" className="btn">
            Publish
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default CreatePost;

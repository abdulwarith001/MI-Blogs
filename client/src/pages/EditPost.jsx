import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/CreatePost";
import { useNavigate, useParams } from "react-router-dom";
import { Input, EditHtml5Editor } from "../components";
import { useGetBlogByIdMutation, useUpdateBlogPostMutation } from "../slices/blogApiSlice";
import Loader from "../components/Loading";

const EditPost = () => {
  const [get_blog, { isLoading }] = useGetBlogByIdMutation();
  const [update_blog, {isLoading: isUpdatingLoading}] = useUpdateBlogPostMutation()
  const [editorContent, setEditorContent] = useState();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [response, setResponse] = useState(null);
  const { id } = useParams();

  const handleEditorDataChange = (data) => {
    setEditorContent(data);
  };
const getBlogPost = async () => {
  try {
    const res = await get_blog(id).unwrap();
    setTitle(res.title);
    setEditorContent(res.content)
    setResponse(res);
  } catch (error) {
      setErrorMsg(error?.data?.message || error.error);
  }
};

  useEffect(() => {
    getBlogPost();
  }, [id]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const formData = new FormData();

        formData.append("title", title);
        formData.append("content", editorContent);
        formData.append('id', id)

        for (let i = 0; i < image.length; i++) {
          formData.append(`image`, image[i]);
        }

        const res = await update_blog(formData).unwrap();
        setSuccessMsg('Updated successfully...')

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
      {isLoading && <Loader text="Loading post..." />}
      {isUpdatingLoading && <Loader text="Updating your post..." />}
      {response && (
        <h4>
          Edit <strong>"{response.title}"</strong>
        </h4>
      )}
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
      {successMsg && <div className="alert alert-success">{successMsg}</div>}

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
            description="Kindly note that this will overide the previous cover photo (not required)"
            onChange={handleImageChange}
            notRequired
          />

          <br></br>
          <label>Content</label>
          {response && (
            <EditHtml5Editor
              name="content"
              onDataChanged={handleEditorDataChange}
              value={response.content}
            />
          )}

          <button type="submit" className="btn">
            Update Post
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default EditPost;

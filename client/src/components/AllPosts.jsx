import React, {useState, useEffect} from "react";
import {Post} from "../assets/wrappers/AllPosts";
import { FaTrashAlt,FaRegEdit  } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBlogPostMutation,
  useGetOwnerBlogMutation,
} from "../slices/blogApiSlice";
import Loader from "../components/Loading";

const AllPosts = ({setTotal, setErrorMsg, setSuccessMsg}) => {
  const navigate = useNavigate()
  const [delete_post, {isLoading: isDeleting}] = useDeleteBlogPostMutation()
  const [get_blogs, { isLoading }] = useGetOwnerBlogMutation();
  const [response, setResponse] = useState([])

  const deletePost = async (id) => {
    try {
      const res = await delete_post(id).unwrap()
      getBlogs()
      setSuccessMsg(res.message)
      setErrorMsg('')
    } catch (error) {
     setErrorMsg(error?.data?.message || error.error);
    }
  }

  const getBlogs = async () => {
    try {
      const res = await get_blogs().unwrap();
      setResponse(res.data);
      setTotal(res.total);
    } catch (error) {
     setErrorMsg(error?.data?.message || error.error);;
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <Post>
      {isLoading && <Loader text="Loading your posts" />}
      {isDeleting && <Loader text="Deleting in progress" />}

      {response.map((blog) => {
        const { title, image, content, _id } = blog;
        return (
          <div className="post" key={_id}>
            <div className="imageTitle">
              <img src={image.url} alt={title} />
              <h3>{title}</h3>
            </div>

            <div className="content">{parse(content)}</div>

            <div className="btnWrapper">
              <button className="btn" onClick={()=> navigate(`/dashboard/edit/${_id}`)}>
                <FaRegEdit />
                Edit
              </button>
              <button className="btn" onClick={() => deletePost(_id)}>
                <FaTrashAlt />
                Delete
              </button>
              <button className="btn" onClick={() => navigate(`/${title}`)}>
                <IoEyeSharp />
                View
              </button>
            </div>
          </div>
        );
      })}
    </Post>
  );
};

export default AllPosts;

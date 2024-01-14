import React from "react";
import {Post} from "../assets/wrappers/AllPosts";
import { FaTrashAlt,FaRegEdit  } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";

const AllPosts = ({title, content, image}) => {
  const navigate = useNavigate()


  return (
    <Post>
      <div className="imageTitle">
        <img src={image} alt="" />
        <h3>{title}</h3>
      </div>

      <div className="content">{parse(content)}</div>

      <div className="btnWrapper">
        <button className="btn">
          <FaRegEdit />
          Edit
        </button>
        <button className="btn">
          <FaTrashAlt />
          Delete
        </button>
        <button className="btn" onClick={()=>navigate(`/${title}`)}>
          <IoEyeSharp />
          View
        </button>
      </div>
    </Post>
  );
};

export default AllPosts;

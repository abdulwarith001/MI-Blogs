import React from 'react'
import Wrapper from '../assets/wrappers/Post';
import sample from "../assets/images/sample.jpg";
import { FaLongArrowAltRight, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import parse from "html-react-parser";

const Post = ({ title, content, image, date, postedBy }) => {
  return (
    <Wrapper>
      <div className="post-container">
        <div className="image-wrapper">
          <img src={image} alt={title} />
        </div>
        <div className="blog-content">
          <div className="date">
            Posted <span>{date}</span>
          </div>
          <h1>{title}</h1>
          <div className="content">{parse(content)}</div>
          <Link to={`/${title}`} className="see-more">
            ...see more
            <FaCaretDown />
          </Link>

          <div className="date credit">
            By <span>{postedBy}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Post
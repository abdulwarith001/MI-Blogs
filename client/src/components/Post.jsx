import React from 'react'
import Wrapper from '../assets/wrappers/Post';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import parse from "html-react-parser";

const Post = ({ title, content, image, date, postedBy }) => {
  const cleanedTitle = title.trim().replace(/\s+/g, "%20");
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
          <Link to={`/${cleanedTitle}`} className="see-more">
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
import React from 'react'
import Wrapper from '../assets/wrappers/Post';
import sample from "../assets/images/sample.jpg";
import { FaLongArrowAltRight, FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Post = () => {
    return (
      <Wrapper>
        <div className="post-container">
          <div className="image-wrapper">
            <img src={sample} alt="" />
          </div>
          <div className="blog-content">
            <div className="date">
              Posted <span>17th Nov 2023</span>
            </div>
            <h1>Sample title</h1>
            <div className="content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
                doloremque adipisci esse non dignissimos maiores doloribus amet
                quasi reiciendis neque aut inventore ullam ad, debitis, beatae
                deserunt quia? Dolor molestiae ut temporibus magnam modi
                deleniti voluptatum praesentium officiis. Dicta reiciendis est
                maiores accusamus voluptatum sequi obcaecati illo natus id
                velit.e aut inventore ullam ad, debitis, beatae deserunt quia?
                Dolor molestiae ut temporibus magnam modi deleniti voluptatum
                praesentium officiis. Dicta reiciendis est maiores accusamus
                voluptatum sequi obcaecati illo natus id velit
                <Link className="see-more">
                  ...see more
                  <FaCaretDown />
                </Link>
              </p>
            </div>

            <div className="date credit">
              By <span>Abdulwahab Abdulwarith</span>
            </div>
          </div>
        </div>
      </Wrapper>
    );
}

export default Post
import React from "react";
import Wrapper from '../assets/wrappers/Comment'

const Textarea = ({ label, row, col }) => {
  return (
    <Wrapper>
    <form className="input-wrapper">
        <textarea name="comment" id="comment" className="textarea" cols="50" row="20" placeholder="Say something about this post..."></textarea>
      <button type="submit" className="btn">
        Send comment
      </button>
    </form>
    </Wrapper>
  );
};

export default Textarea;

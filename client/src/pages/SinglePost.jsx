import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/SinglePost";
import { useGetSingleBlogMutation } from "../slices/blogApiSlice";
import { useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import Logo from "../components/Logo";
import SocialMediaShare from "../components/SharePost";
import Loader from "../components/Loading";
import Comment from "../components/Comment";

const SinglePost = () => {
  const { title } = useParams();
  const [blog, { isLoading }] = useGetSingleBlogMutation();
  const [data, setData] = useState({});
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  const postUrl = `${window.location.origin}${location.pathname}`;
   const cleanedTitle = title.replace(/_/g, " ");
   const encodedTitle = encodeURIComponent(cleanedTitle);

  const getPost = async () => {
    try {
      console.log(title)
      const res = await blog(encodedTitle).unwrap();
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Wrapper>
      {isLoading && <Loader text="Post dey on the way..." />}

      <nav>
        <Logo />
      </nav>
      {data.image && (
        <article className="blogname">
          <div>
            <img src={data.image.url} alt={data.title} />
          </div>
          <span>{data.postedBy}</span>
        </article>
      )}

      <section className="postContainer">
        {data.title && <h2>{data.title}</h2>}
        {data.content && <div className="content">{parse(data.content)}</div>}
        {/* <form> */}
          <Comment />
          {/* <button className="btn submit">Send comment</button> */}
        {/* </form> */}

        {data.content && (
          <SocialMediaShare
            title={`Hey there, I just dropped a post on MI Blogs website. Pls support by reading @${data.postedBy}`}
            url={postUrl}
          />
        )}
      </section>
    </Wrapper>
  );
};

export default SinglePost;

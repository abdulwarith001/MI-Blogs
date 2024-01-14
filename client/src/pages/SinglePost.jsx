import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/SinglePost";
import { useGetSingleBlogMutation } from "../slices/blogApiSlice";
import { useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import Logo from "../components/Logo";
import SocialMediaShare from "../components/SharePost";
import Loader from '../components/Loading'

const SinglePost = () => {
  const { title } = useParams();
  const [blog, { isLoading }] = useGetSingleBlogMutation();
  const [data, setData] = useState({});
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;
  // const postUrl = `${location.origin}${location.pathname}`;
const postUrl = `${window.location.origin}${location.pathname}`;

  const getPost = async () => {
    try {
      console.log(postUrl);
      const res = await blog(title).unwrap();
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  const stripHtmlTags = (html) => {
    return html.replace(/<[^>]*>?/gm, "");
  };

  return (
    <Wrapper>
      {data && (
        <Helmet>
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.title} />
          <meta property="og:url" content={data.image.url} />
        </Helmet>
      )}
      {isLoading && <Loader text="Post dey come..." />}

      <nav>
        <Logo />
      </nav>
      {data.image && (
        <article className="blogname">
          <div>
            <img src={data.image.url} alt={data.title} />
          </div>
          {data.postedBy}
        </article>
      )}

      <section className="postContainer">
        {data.title && <h2>{data.title}</h2>}
        {data.content && <div className="content">{parse(data.content)}</div>}

        {data.content && (
          <SocialMediaShare
            title={`Kindly read this post by "${data.postedBy}" on MI Blogs website`}
            url={postUrl}
          />
        )}
      </section>
    </Wrapper>
  );
};

export default SinglePost;

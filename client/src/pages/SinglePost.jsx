import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/SinglePost";
import { useGetSingleBlogMutation } from "../slices/blogApiSlice";
import { useParams, useLocation } from "react-router-dom";
import parse from "html-react-parser";
import Logo from "../components/Logo";
import SocialMediaShare from "../components/SharePost";
import Loader from "../components/Loading";
import Reaction from "../components/Reaction";
import { Helmet } from "react-helmet";


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
      <Helmet>
        {data.title && <title>{data.title}</title>}
        <meta
          name="description"
          content="With MI Blogs, your data is safe and you can delete it anytime you want..."
        />
        <meta name="page-topic" content="Media" />
        <meta name="page-type" content="Blogging" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
        {data.image && <meta property="og:image" content={data.image.url} />}
      </Helmet>
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
        <h5>Select any reaction to rate post...</h5>
        <br />
        {/* <Comment /> */}

        {data._id && <Reaction id={data._id} />}
        {data.content && (
          <SocialMediaShare
            title={`Hey there, I just dropped a post on MI Blogs website. Pls support by reading @${data.postedBy}`}
            title2={data.title}
            url={postUrl}
            image={data.image.url}
          />
        )}
      </section>
    </Wrapper>
  );
};

export default SinglePost;

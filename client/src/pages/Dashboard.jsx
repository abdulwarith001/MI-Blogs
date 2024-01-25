import React, { useEffect, useState } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { FaFire, FaHeart, FaThumbsUp } from "react-icons/fa";
import { useGetBlogStatsMutation } from "../slices/blogApiSlice";
import BlogChart from "../components/BlogChart";
import { Helmet } from "react-helmet";
import Loader from '../components/Loading'

const Dashboard = () => {
  const [stats, { isLoading }] = useGetBlogStatsMutation();
  const [reactions, setReactions] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const getStats = async () => {
    try {
      const res = await stats().unwrap();
      setReactions(res.reactions);
      setBlogs(res.monthlyBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStats();
  }, []);
  return (
    <Wrapper>
      {isLoading && <Loader text="Loading stats" />}
      <Helmet>
        <title>MI Blogs | Dashboard</title>
        <meta
          name="description"
          content="With MI Blogs, your data is safe and you can delete it anytime you want..."
        />
        <meta name="page-topic" content="Media" />
        <meta name="page-type" content="Blogging" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <h4 className="total">Total reactions on this blog</h4>
      <article className="reactionContainer">
        <div className="reaction">
          <div>
            {reactions && <h2>{reactions.excellent} </h2>}
            <div className="icon">
              <FaFire />
            </div>
          </div>
          <p>Excellent's</p>
        </div>

        <div className="reaction">
          <div>
            {reactions && <h2>{reactions.love}</h2>}
            <div className="icon icon2">
              <FaHeart />
            </div>
          </div>
          <p>Love's</p>
        </div>

        <div className="reaction">
          <div>
            {reactions && <h2>{reactions.like}</h2>}
            <div className="icon icon3">
              <FaThumbsUp />
            </div>
          </div>
          <p>Like's</p>
        </div>
      </article>
      <h4 className="monthHeader">Total Blogs Monthly</h4>
      {blogs.length < 1 ? (
        <div className="alert alert-success">
          Start creating posts now to show <strong>stats</strong>
        </div>
      ) : (
        <BlogChart data={blogs} />
      )}
    </Wrapper>
  );
};

export default Dashboard;

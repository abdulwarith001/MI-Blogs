import React, { useEffect, useState } from 'react'
import {Logo, Post} from '../components'
import Wrapper from '../assets/wrappers/Landing'
import illustration from '../assets/images/welcome.svg'
import { Link } from 'react-router-dom'
import {useGetLatestBlogMutation} from '../slices/blogApiSlice'
import Loader from '../components/Loading'
import { Helmet } from "react-helmet";

const Landing = () => {
  const [posts, setPosts] = useState([])
  const [blogs, {isLoading}] = useGetLatestBlogMutation()

 const getPosts = async () => {
   try {
     const response = await blogs().unwrap();
     setPosts(response)
   } catch (error) {
     console.log(error);
   }
 };


  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Wrapper>
      {isLoading && <Loader text="Abeg clam down, we dey load post" />}
      <Helmet>
        <title>MI Blogs </title>
        <meta
          name="description"
          content="With MI Blogs, your data is safe and you can delete it anytime you want..."
        />
        <meta name="page-topic" content="Media" />
        <meta name="page-type" content="Blogging" />
        <meta name="audience" content="Everyone" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <nav>
        <Logo />
      </nav>
      <div className="page-container">
        <div className="container page">
          <div className="info">
            <img src={illustration} alt="" className="img mobile-img" />
            <h1>
              <span>welcome</span> to my Blog
            </h1>
            <p className="text">
              This blog website has personalized features that gives you control
              over the entire layout of your blogging website. This includes
              features to edit colors used on the site, edit logos, edit the
              display of your posts and you can also edit the texts too. All
              from your dashboard.
            </p>
            <Link to="/login" className="btn">
              {" "}
              Get started
            </Link>
          </div>
          <div>
            <img src={illustration} alt="" className="img main-img" />
          </div>
        </div>

        <section className="posts">
          <div className="headerText">
            Popular posts <div></div>
          </div>
          {posts.map((post) => {
            const { title, content, _id, image, created, postedBy } = post;
            return (
              <Post
                title={title}
                content={content}
                image={image.url}
                date={created}
                postedBy={postedBy}
                key={_id}
              />
            );
          })}
        </section>
      </div>
    </Wrapper>
  );
}

export default Landing
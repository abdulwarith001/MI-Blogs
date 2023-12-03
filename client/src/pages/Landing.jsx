import React from 'react'
import {Logo, Post} from '../components'
import Wrapper from '../assets/wrappers/Landing'
import illustration from '../assets/images/welcome.svg'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
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
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </div>
    </Wrapper>
  );
}

export default Landing
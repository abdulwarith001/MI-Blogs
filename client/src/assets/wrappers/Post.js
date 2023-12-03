import styled from "styled-components";

const Wrapper = styled.section`
  .post-container {
    width: 100%;
    margin: 0 auto 2.3em;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 0.3em;
  }

  .post-container > .image-wrapper {
    width: 100%;
  }

  .image-wrapper > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.3em 0 0 0.3em;
  }

  .blog-content {
    width: 100%;
    padding: 2em 1em;
  }

  .blog-content > h1 {
    font-size: 2.2em;
    font-weight: bolder;
  }

  .blog-content > div > p {
    line-height: 1.5em;
    word-spacing: 0.3em;
    color: rgba(0, 0, 0, 0.7);
    font-family: sans-serif;
    letter-spacing: 0.01em;
  }

  .date {
    text-align: right;
    color: black;
    font-weight: bolder;
    font-size: 1.1em;
  }

  .date > span {
    font-size: 0.9em;
    font-weight: lighter;
    color: rgba(0, 0, 0, 0.6);
  }

  .credit {
    text-align: left;
    margin-top: 1.5em;
  }

  .see-more {
    font-weight: bolder;
    word-spacing: normal;
    color: rgb(93, 100, 202);
  }

  .see-more:hover {
    text-decoration: underline;
  }
  @media (min-width: 992px) {
    .post-container {
      width: 80%;
      flex-direction: row;
    }
    .post-container > .image-wrapper {
      width: 100%;
    }
    .blog-content {
      width: 100%;
    }
  }
`;

export default Wrapper;

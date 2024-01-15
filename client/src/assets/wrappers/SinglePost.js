import styled from "styled-components";

const Wrapper = styled.section`
  .blogname {
    font-size: 2em;
    font-weight: bolder;
    margin: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
  }

  .blogname > div {
    width: 5em;
    height: 5em;
  }

  .blogname > div > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .postContainer {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 4em;
  }

  .postContainer > .content {
    margin-top: 1em;
    background: rgba(0, 0, 0, 0.03);
    line-height: 1.5em;
    word-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.7);
    font-family: sans-serif;
    letter-spacing: 0.01em;
    font-size: 1.1em;
    padding: 0.5em;
  }

  nav {
    display: flex;
  }

  .btnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    padding: 1.4em;
  }

  .social-media-share > p {
    margin-top: 1em;
  }

  @media (max-width: 992px) {
    .postContainer {
      width: 100%;
    }

    .blogname,
    .btnContainer {
      flex-direction: column;
    }

    .btn {
      width: 80%;
    }
  }
`;

export default Wrapper;

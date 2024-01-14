import styled from "styled-components";

const Wrapper = styled.section`
  margin: 1em;

  h4 {
    font-size: 1em;
    font-weight: bold;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  @media (max-width: 992px) {
    width: 100%;
    margin: 0;
  }
`;

export const Post = styled.article`
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  .imageTitle {
    display: flex;
    margin: 1em;
  }

  .imageTitle > img {
    width: 5em;
    height: 5em;
    object-fit: cover;
    border-radius: 5px;
  }

  .imageTitle > h3 {
    font-size: 1.1em;
    font-weight: bolder;
    margin: 0.5em;
  }

  .content {
    line-height: 1.5em;
    word-spacing: 0.1em;
    color: rgba(0, 0, 0, 0.7);
    font-family: sans-serif;
    letter-spacing: 0.01em;
    /* margin-left: 1em; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }

  .btnWrapper{
    display: flex;
    gap: 1em;
    margin: 0 10px 10px;
  }

  .btn{
    padding: 0.5em;
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
`;

export default Wrapper;

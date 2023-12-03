import styled from "styled-components";

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    height: fit-content;
    display: grid;
    align-items: center;
    gap: 2em;

  }
  
  .mobile-img {
    margin-bottom: 2em;
  }
  .info {
    gap: 1em;
  }
  h1 {
    font-size: 3.4em;
    font-weight: 700;
    span {
      color: rgb(93, 100, 202);
    }
    margin-bottom: 1.5rem;
  }
  .text {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }

  .headerText {
    text-align: center;
    font-size: 2em;
    font-weight: bolder;
    margin-top: 1em;
    div {
      width: 3.5em;
      margin: 0.1em auto 1em;
      border-bottom: 5px solid rgb(93, 100, 202);
    }
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      height: 80vh;
    }
    .main-img {
      display: block;
    }

    .mobile-img {
      display: none;
    }

    .headerText {
      margin-top: -1em;
    }

    .posts {
      margin-top: 1em;
    }
  }
`;

export default Wrapper;

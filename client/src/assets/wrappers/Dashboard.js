import styled from "styled-components";

const Wrapper = styled.section`
  .reactionContainer {
    display: flex;
    justify-content: space-between;
    padding: 0.5em;
  }

  .reaction {
    background: rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    width: 30%;
    padding: 1.5em;
    border-bottom: 5px solid rgba(212, 0, 0, 1);
  }

  .reaction > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    font-family: "Poppins", sans-serif;
  }

  .icon {
    font-size: 2.3em;
    background: rgba(212, 0, 0, 0.374);
    padding: 0.25em 0.5em;
    color: rgba(212, 0, 0, 1);
    border-radius: 5px;
  }

  .reaction > p {
    font-size: 1.2em;
  }

  .reaction:nth-child(2) {
    border-bottom: 5px solid purple;
  }
  .reaction:nth-child(3) {
    border-bottom: 5px solid blue;
  }

  .icon2 {
    color: purple;
    background-color: rgba(212, 0, 236, 0.253);
  }

  .icon3 {
    color: blue;
    background: rgba(0, 0, 236, 0.253);
  }

  .reaction > div > h2 {
    color: rgba(212, 0, 0, 1);
  }
  .reaction:nth-child(2) > div > h2 {
    color: purple;
  }
  .reaction:nth-child(3) > div > h2 {
    color: blue;
  }

  .monthHeader {
    text-align: center;
    margin-top: 1em;
  }
  @media (max-width: 992px) {
    .reactionContainer {
      flex-direction: column;
    }

    .reaction {
      width: 100%;
    }
  }
`;

export default Wrapper;

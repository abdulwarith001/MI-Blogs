import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .shadow {
    background: rgba(93, 100, 202, 0.1);
    width: 36vw;
    height: 80vh;
    margin-top: 2em;
    margin-left: 3em;
    position: relative;
    border-radius: 2em;
  }

  .content {
    background: white;
    width: 35vw;
    height: 80vh;
    padding: 0 3em 3em;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    border-radius: 2em;
    position: absolute;
    /* left: 57%; */
    left: 30%;
    top: 11%;
  }

  .content > p {
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-weight: 430;
    font-size: 1em;

    .link {
      color: rgb(93, 100, 202);
    }
  }

  .input-main-wrapper {
    margin-top: 3em;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1em;
    gap: 0.4em;
  }

  .input-wrapper > label {
    font-size: 1em;
    color: rgba(0, 0, 0, 0.8);
  }

  .input-wrapper > input {
    padding: 0.7em;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.02);
    border-radius: 0.2em;
  }

  .btn {
    width: 100%;
    padding: 1em;
    margin-top: 1.7em;
  }

  @media (max-width: 992px) {
    .shadow {
      display: none;
    }

    .content {
      width: 90vw;
      height: fit-content;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1.4em;
      margin: 3em auto;
    }
  }
`;

export default Wrapper;
import styled from "styled-components";

const Wrapper = styled.section`
  /* background: green; */
  padding: 1em;
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
    width: 100%;
  }

  .btnContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn {
    width: fit-content;
    display: flex;
    align-self: flex-end;
    margin-top: 4em;
    padding: 1em 5em;
  }
`;

export const Editor = styled.div`
height:500px;
/* background-color: green; */
`
export default Wrapper;

import styled from "styled-components";

const Wrapper = styled.aside`
  .logout-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2em;
    cursor: pointer;
    position: relative;
    background: none;
    border: none;
    font-size: 1em;
  }

  .dropdown {
    width: 8em;
    padding: 0.7em;
    background-color: rgb(93, 100, 202);
    color: white;
    position: absolute;
    top: 10%;
    right: 2%;
    font-size: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    border-radius: 0.2em;
    box-shadow: 0.5px 0.5px 10px rgba(0, 0, 0, 0.1),
      -0.5px -0.5px 10px rgba(0, 0, 0, 0.1);
  }

  .show-logout {
    display: none;
  }
`;
export default Wrapper;

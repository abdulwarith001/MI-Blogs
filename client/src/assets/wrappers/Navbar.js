import styled from "styled-components";

const Wrapper = styled.section`
  .nav {
    width: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 2em;
    padding-right: 2em;
    background-color: white;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: bold;
    color: rgb(93, 100, 202);
  }

  .caret-icon {
    font-size: 1.5em;
    color: rgba(0, 0, 0, 0.731);
    font-weight: bolder;
  }
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
    ;
  }

  .show-logout {
    display: none;
  }

  .toggle-btn{
    display: block;
    background: none;
    border: none;
    outline: none;
    font-size: 1.5em;
  }

  .show-sidebar{
    display: none;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }

    .toggle-btn{
      display: none;
    }
  }
`;
export default Wrapper;

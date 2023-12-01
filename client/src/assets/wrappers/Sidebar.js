import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    /* box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1); */
    .sidebar-container {
      background: rgb(93, 100, 202);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
      color: white;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: white;
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
      transition: background-color 100ms ease-in;
      margin-left: 0.7em;
      border-top-left-radius: 10em;
      border-bottom-left-radius: 10em;
      font-weight: bold;
    }
    .nav-link:hover {
      padding-left: 3rem;
      transition: var(--transition);
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: rgb(93, 100, 202);
      background: var(--background-color);
      transition: var(--transition);
    }

    .pending {
      background: var(--background-color);
    }

    p {
      color: white;
    }
  }
`;
export default Wrapper;

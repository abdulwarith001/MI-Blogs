import styled from "styled-components";

const Wrapper = styled.section`
.input-container{
  display: none;
}
  @media (min-width: 992px) {
    .input-container {
      width: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.5em;
    }

    .icon {
      font-size: 1rem;
      display: grid;
      place-items: center;
      height: 100%;
      padding: 0.5em;
      border: none;
      background-color: rgba(0, 0, 0, 0.027);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .search {
      outline: none;
      border: none;
      height: 100%;
      width: 100%;
      font-weight: lighter;
      color: rgba(0, 0, 0, 0.8);
      background-color: rgba(0, 0, 0, 0.027);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
`;

export default Wrapper;

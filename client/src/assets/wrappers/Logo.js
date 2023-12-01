import styled from 'styled-components';

const Wrapper = styled.section`
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* max-width: 18em; */
    margin: 1em;
  }
  p {
    font-size: 1.8em;
    font-weight: bolder;
    color: rgb(93, 100, 202);
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export default Wrapper
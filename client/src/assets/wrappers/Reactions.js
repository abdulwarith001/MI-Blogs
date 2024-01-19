import styled from 'styled-components'

const Wrapper = styled.aside`
  /* background: red */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  img {
    width: 100%;
    height: 100%;
  }

  .img-wrapper {
    cursor: pointer;
    padding: 0.5em;
    width: 10em;
    /* height: 5m; */
    border-radius: 10px;
  }

  .img-wrapper:hover {
    background: rgba(93, 100, 202, 0.2);
  }
`;

export default Wrapper
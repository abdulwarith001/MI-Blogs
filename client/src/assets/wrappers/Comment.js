import styled from 'styled-components'

const Wrapper = styled.section`
width: 100%;
margin: 1.5em 0;

.textarea{
    height: 10em;
    width: 100%;
    font-size: 1.1em;
    padding: 1em;
    color: rgba(0, 0, 0, 0.8);
    resize: none;
    outline: none;
    border: 0.5px solid rgba(0, 0, 0, 0.3);
    margin-bottom: 0.5em;
    border-radius: 5px;
}

.textarea:focus{
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.01);
    border: none;
}

.btn{
    margin: 0 auto;
    width: 80%;
}
`;

export default Wrapper
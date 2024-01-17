import styled from 'styled-components'

const Wrapper = styled.aside`
display: flex;
/* background: red; */
justify-content: center;
gap: 3em;
align-items: center;
/* flex-direction: column; */

.rateBtn{
    font-size: 3em;
    color: rgb(0, 0, 0);
    cursor: grab;
    color: blue;}

.rateBtn:nth-child(2){
    color: rgb(255, 69, 0);
}

.basket{
    width: 7em;
    height: 7em;
    border-radius: 50%;
    border: 5px solid black;
    display: grid;
    place-content: center;
}

.icon{
    font-size: 2em;
}

.rateBtn > span{
    font-size: 0.3em;
    color: black;
}
`;

export default Wrapper
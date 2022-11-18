import styled from 'styled-components';

export const Navbarcontainer = styled.div`
width: 100%;
height: 80px;
position: sticky;
top: 0;
z-index: 99;
background-color: white;
color: white;
`;

export const Navbarwrapper = styled.div`
margin: auto;
width: 100%;
max-width: 100%;
height: 100%;
align-items: center;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border: 1px solid black;
`;

export const Icone = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-items: center;
`

export const MENU = styled.ul`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
`


export const MENUItem = styled.li`
height: 100%;
padding: 0.6rem 1.6rem;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
font-weight: 400;
`

export const MENULink = styled.a`
text-decoration: none;
color: black;
padding: 0.6rem .5rem;
`
import { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(NavLink)`
    padding: 1rem 2rem;
    color: ${props => props.theme.hfbTxtColor};
    background-color: ${props => props.theme.hfbSection};
    border-radius: 10px;
    text-decoration: none;
    
`;

const Section = styled.section`
    margin: 0;
    padding: 0;
    height: 100vh;
    background-color: ${props => props.theme.bgColor};
    display: grid; 
    grid-template-columns: 1fr 3fr 1fr; 
    grid-template-rows: repeat(6,1fr); 
    gap: 0px 0px; 
    grid-template-areas: 
    ". . ."
    ". S ."
    ". S ."
    ". S ."
    ". S ."
    ". . ."; 
`;

const GameSection = styled.div`
        color: ${props => props.theme.mainSectionTxtColor};
        font-size: 2.5rem;

`;

const WholeSection = styled.div`
    grid-area: S;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;    
    & p {
        color: ${props => props.theme.mainSectionTxtColor};
        font-size: 1.5rem;
        padding: 2rem;

        & span {
            color: red;
            font-weight: bold;
        }
    }
`;

function Game() {
    const [res, setRes] = useState('');
    const [num, setNum] = useState(0);
    const [resObj, setRestObj] = useState({
        h1: '___ ',
        h2: '___ ',
        h3: '___ ',
        h4: '___ ',
        h5: '___ ',
        h6: '___ ',
        h7: '___ ',
        h8: '___ ',
        h9: '___',
        h1t: false,
        h2t: false,
        h3t: false,
        h4t: false,
        h5t: false,
        h6t: false,
        h7t: false,
        h8t: false,
        h9t: false,
    })

    const numHandler = (daIndex) => {
        setNum(num + 1)
        if (num % 2 === 0) {
            resObj[daIndex] = '❌'
        } else if (num % 2 !== 0) {
            resObj[daIndex] = '⭕'
        }
    }
    const triggerHandler = (daIndex) => {
        resObj[daIndex] = true
    }

    const resultHandler = () => {
        if ((resObj.h1 === "❌") && (resObj.h2 === "❌") && (resObj.h3 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h1 === "❌") && (resObj.h4 === "❌") && (resObj.h7 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h7 === "❌") && (resObj.h8 === "❌") && (resObj.h9 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h3 === "❌") && (resObj.h6 === "❌") && (resObj.h9 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h3 === "❌") && (resObj.h5 === "❌") && (resObj.h7 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h1 === "❌") && (resObj.h5 === "❌") && (resObj.h9 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h2 === "❌") && (resObj.h5 === "❌") && (resObj.h8 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h4 === "❌") && (resObj.h5 === "❌") && (resObj.h6 === "❌")) {
            setRes('X WIN')
        } else if ((resObj.h1 === "⭕") && (resObj.h2 === "⭕") && (resObj.h3 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h1 === "⭕") && (resObj.h4 === "⭕") && (resObj.h7 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h7 === "⭕") && (resObj.h8 === "⭕") && (resObj.h9 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h3 === "⭕") && (resObj.h6 === "⭕") && (resObj.h9 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h3 === "⭕") && (resObj.h5 === "⭕") && (resObj.h7 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h1 === "⭕") && (resObj.h5 === "⭕") && (resObj.h9 === "⭕")) {
            setRes('O WIN')
        } else if ((resObj.h2 === "⭕") && (resObj.h5 === "⭕") && (resObj.h8 === "⭕")) {
            setRes('O WIN')
        }else if ((resObj.h4 === "⭕") && (resObj.h5 === "⭕") && (resObj.h6 === "⭕")) {
            setRes('O WIN')
        }

    }

    useEffect(() => {
        resultHandler()
    }, [numHandler])
    return (
        <Section>
            <WholeSection>
                <GameSection>
                    <span onClick={() => { resObj.h1t ? triggerHandler('h1t') : numHandler('h1'); triggerHandler('h1t') }} >{resObj.h1}</span>
                    <span onClick={() => { resObj.h2t ? triggerHandler('h2t') : numHandler('h2'); triggerHandler('h2t') }}>{resObj.h2}</span>
                    <span onClick={() => { resObj.h3t ? triggerHandler('h3t') : numHandler('h3'); triggerHandler('h3t') }}>{resObj.h3}</span>
                    <br />
                    <span onClick={() => { resObj.h4t ? triggerHandler('h4t') : numHandler('h4'); triggerHandler('h4t') }}>{resObj.h4}</span>
                    <span onClick={() => { resObj.h5t ? triggerHandler('h5t') : numHandler('h5'); triggerHandler('h5t') }}>{resObj.h5}</span>
                    <span onClick={() => { resObj.h6t ? triggerHandler('h6t') : numHandler('h6'); triggerHandler('h6t') }}>{resObj.h6}</span>
                    <br />
                    <span onClick={() => { resObj.h7t ? triggerHandler('h7t') : numHandler('h7'); triggerHandler('h7t') }}>{resObj.h7}</span>
                    <span onClick={() => { resObj.h8t ? triggerHandler('h8t') : numHandler('h8'); triggerHandler('h8t') }}>{resObj.h8}</span>
                    <span onClick={() => { resObj.h9t ? triggerHandler('h9t') : numHandler('h9'); triggerHandler('h9t') }}>{resObj.h9}</span>
                    <br />
                </GameSection>
                <br />
                <p>Result : <span>{res}</span></p>
                <br />
                <Link to="/">Play Again 🔁</Link>
            </WholeSection>
        </Section>
    )
}

export default Game;

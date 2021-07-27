import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

const StartSection = styled.div`
    grid-area: S;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & p {
        color: ${props => props.theme.mainSectionTxtColor};
        font-size: 1.5rem;
        padding: 2rem;
    }
`;

const Link = styled(NavLink)`
    padding: 1rem 2rem;
    color: ${props => props.theme.hfbTxtColor};
    background-color: ${props => props.theme.hfbSection};
    border-radius: 10px;
    text-decoration: none;
   
`;

function MainPage() {
    return (
        <Section>
            <StartSection>
                <p>⭕ Tic Tac Toe Game ❌</p>
                <p>Press Start Button To Start The Game 😃</p>
                <Link to='game'>Start 🚀</Link>
            </StartSection>
        </Section>
    )
}

export default MainPage;

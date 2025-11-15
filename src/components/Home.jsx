import styled from "styled-components"
import { Button } from "../assets/styled/Button";
const Home = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      
      <div className="contant">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
max-width: 1182px;
display: flex;
align-items: center;
margin: 0 auto;
height: 100vh;

.contant h1{
  font-size: 96px;
  white-space: nowrap;
}
`;

;
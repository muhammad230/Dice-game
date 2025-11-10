import styled from "styled-components"
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

const Button = styled.button`
padding: 10px 18px;
background-color: #000;
color: #ffff;
border-radius: 5px;
border: none;
width: 220px;
font-size: 16px;
 border: 1px solid white;
 transition: 0.4s background ease-in;
&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
}
`;
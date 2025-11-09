import styled from "styled-components"
const Home = () => {
  return (
    <Container>
      <img src="/images/dices.png" alt="" />
      <div>
        <h1>Dice Game</h1>
        <Button>Play Now</Button>
      </div>
    </Container>
  )
}

export default Home

const Container = styled.div`
max-width: 11880px;
`;

const Button = styled.button`
`;
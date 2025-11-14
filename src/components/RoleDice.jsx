import styled from "styled-components"


const RoleDice = ({currentDice, setcurrentDice}) => {
  const genrateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const roleDice = () => {
    const randomNumber = genrateRandomNumber (1, 7);

    setcurrentDice ((prev) => randomNumber);

  };
  return (
    <DiceContainer>
        <div className="dice"onClick={roleDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>

      
    </DiceContainer>
  )
}

export default RoleDice


const DiceContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px    ;
p{
    font-size: 25px;
}
.dice{
  cursor: pointer;
}
`;
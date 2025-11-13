import styled from "styled-components"


const RoleDice = () => {
  return (
    <DiceContainer>
        <div>
            <img src="/images/dice/dice_1.png" alt="" />
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
    font-size: 24px;
}
`;
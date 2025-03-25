import styled from 'styled-components'
import Gatinho from "./assets/gatinho.jpg"

function App() {
  return (
    <>
      <Container>
        <Title>Bem-vindo ao aplicativos de gatinhos!!</Title>
        <Subtitle>Aqui você pode gerar fotos aleatórias de gatos e até mesmo dar nomes a alguns</Subtitle>


        <Input 
          type="text"
          placeholder= "Dê nome ao seu gatinho aqui!"
        />
        <Img src={Gatinho} alt="gatinho filhote fofo"/>

        <Button>Gerar gato</Button>
      </Container>
    </>
  )
}

export default App


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FCDFFF;
  justify-content: space-evenly;
`

const Title = styled.p`
  font-size: 50px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
`

const Subtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`

const Input = styled.input`
  width: 20%;
  height: 35px;
  border-radius: 55px;
  border: 2px solid #FFDFDD;
  box-sizing: border-box;
  padding-left: 15px;
`

const Img = styled.img`
  width: 30%;
  height: 40%;
  border-radius: 200px;
`

const Button = styled.button`
  width: 150px;
  height: 30px;
  border-radius: 60px;
  border: 2px solid #F6C6BD;
  background-color: #FFF0F5;
  font-size: 15px;
  font-weight: 300;
  color: #E56E94;
`
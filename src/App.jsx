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
  background-color: #E6E6FA;
  justify-content: space-evenly;
`

const Title = styled.p``

const Subtitle = styled.p``

const Input = styled.input`
  width: 20%;
  height: 30px;
  border-radius: 55px;
  border: 1px solid #FFDFDD;
  box-sizing: border-box;
  padding-left: 10px;
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
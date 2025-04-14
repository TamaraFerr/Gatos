import styled from 'styled-components'
import Gatinho from "./assets/gatinho.jpg"
import { TfiSearch } from "react-icons/tfi";

function App() {
  return (
    <>
      <Container>
        <h1>Bem-vindo ao gerador de gatinhos!!</h1>
        <h2>Aqui você pode gerar fotos aleatórias de gatos e até mesmo dar nomes a alguns</h2>

        <InputContent>
          <Input 
            type="text"
            placeholder= "Dê nome ao seu gatinho aqui!"
          />
          <TfiSearch 
            color='#C83F49'
            width='15px'
          />
        </InputContent>

        <Content>
          <Img src={Gatinho} alt="gatinho filhote fofo"/>
        </Content>

        <Button>Gerar gato</Button>
      </Container>
    </>
  )
}

export default App


const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E6C7C2;
  justify-content: space-evenly;

  & h1 {
    font-size: 50px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #393939;
  }

  & h2 {
    font-size: 20px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    color: #393939;
  }
`

const Input = styled.input`
  width: 20%;
  height: 35px;
  border-radius: 55px;
  border: 2px solid #FFDFDD;
  box-sizing: border-box;
  padding-left: 15px;

  &:focus {
    outline: none;
    border: 3px solid #E56E94;
  }
`

const Img = styled.img`
  width: 400px;
  height: auto;
  border-radius: 100px;
  margin-right: 15px;
  border: 1px solid #EAEEE9;
`

const Button = styled.button`
  width: 200px;
  height: 30px;
  border-radius: 60px;
  border: 2px solid #F6C6BD;
  background-color: #FFF0F5;
  font-size: 15px;
  font-weight: 300;
  color: #E56E94;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: #ffffff;
    background-color: #E56E94;
  }
`

const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
`

const InputContent = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10%;
`
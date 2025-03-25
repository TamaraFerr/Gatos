import styled from 'styled-components'
import Gatinho from "./assets/gatinho.jpg"

function App() {
  return (
    <>
      <Container>
        <h1>Bem-vindo ao aplicativos de gatinhos!!</h1>
        <h2>Aqui você pode gerar fotos aleatórias de gatos e até mesmo dar nomes a alguns</h2>


        <input />
        <img src={Gatinho} alt="gatinho filhote fofo"/>

        <button>Gerar gato</button>
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
`

const Title = styled.p``

const Subtitle = styled.p``

const Input = styled.input``


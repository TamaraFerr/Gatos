import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
  return (
    <Container>
      <div>
        <h1>Seja bem-vindo ao nosso App, faça login e aproveite as fotos!</h1>
      </div>

      <div>
        <input 
          placeholder="E-mail"
          type="text"
        />

        <input 
          placeholder="Sua senha"
          type="password"
        />

        <button>Entrar</button>
      </div>

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se para aproveitar!
      </Link>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
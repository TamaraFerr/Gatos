import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
  return (
    <Container>
      <div>
        <h1>Seja bem-vindo ao nosso App, faça login e aproveite as fotos!</h1>
      </div>

      <Form>
        <Input 
          placeholder="E-mail"
          type="text"
        />

        <Input 
          placeholder="Sua senha"
          type="password"
        />

        <Button>Entrar</Button>
      </Form>

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

const Form = styled.div`
  box-sizing: border-box;
  display; flex;
  flex-direction: column;
  width: 350px;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  border-radius: 8px;
  margin-buttom: 15px;
  padding-left: 15px;
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #000000;
  background-color: pink;
  border-radius: 8px;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 15px;
  color: #f6f6f6;
  cursor: pointer;
  transition: all 100ms;
  &:hover{
    color: #000000;
    background-color: white;
    border: 2px solid pink;
  }
`
import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Login() {
  return (
    <Container>
      <Head>
        <h1>Seja bem-vindo ao nosso App, faça login e aproveite as fotos!</h1>
      </Head>

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

const Head = styled.div`
  width: 100%;
  text-align: center;
  & h1{
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
    font-size: 30px;
    color: #393939;
  }
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
  border: 1px solid #FFDFDD;
  border-radius: 8px;
  margin-buttom: 15px;
  padding-left: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #393939;
  margin-bottom: 5px;
  &:focus {
    outline: none;
    border: 3px solid #E56E94;
  }
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 2px solid #F6C6BD;
  background-color: #F4C3C3;
  font-size: 15px;
  font-weight: 300;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #ffffff;
    background-color: #E56E94;
  }
`
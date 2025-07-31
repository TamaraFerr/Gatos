import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Cadastro() {
  return (
    <Container>
      <Head>
        <h1>Primeira vez? Faça seu cadastro e aproveite as nossas fofuras!</h1>
      </Head>

      <Form>
        <Input 
          placeholder="Nome"
          type="text"
        />

        <Input 
          placeholder="E-mail"
          type="text"
        />

        <Input 
          placeholder="Sua senha"
          type="password"
        />

        <Input 
          placeholder="Confirme a sua senha"
          type="password"
        />

        <Button>Entrar</Button>
      </Form>

      <Link to={"/"}>
      <Links>Já possui uma conta? Faça o login para entrar!</Links>
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
  margin-bottom: 10%;
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

const Links = styled.p`
  margin-top: 25px;
  color: #E56E94;
  text-decoration-line: underline;
  font-family: "Montserrat", sans-serif;
`
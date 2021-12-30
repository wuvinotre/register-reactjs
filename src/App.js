import React from 'react';
import './App.css';
import FormularioCadastro from './Components/formularioCadastro/formularioCadastro';
import 'fontsource-roboto';

import {Container, Typography} from "@material-ui/core";

function App () {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h2" component="h1" align="center" color="textSecondary">Formulário de cadastro</Typography>
         <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/> 
      </Container>
    );
  }

  function aoEnviarForm(dados){
    console.log(dados);
  }

  function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido: false, texto:"CPF deve conter 11 digitos."}
    }else{
      return{valido: true, texto:""}
    }
  }

export default App;

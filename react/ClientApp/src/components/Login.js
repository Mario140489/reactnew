import React, { Component } from 'react';
import {Avatar,Button, CssBaseline,TextField,FormControlLabel,Box,Typography,makeStyles,Container,FormControl,InputLabel,Input,OutlinedInput} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../compcss/Login.css';
import 'typeface-roboto';

export class Login extends Component {

  static displayName = Login.name;
  constructor(props) {

    super(props);
    this.state = {
      Login: "",
      Senha: "",
    };
    this.erros = {
      errorusuario:false,
      errorsenha:false,
    };
    this.Login = this.Login.bind(this);
  }
   async LoginUsuario(data){
     const headers = new Headers();
     headers.append('content-type','application/json');
     const options = {
       method:'POST',
       headers,
       body:JSON.stringify(data)
     };
     const response = await fetch('api/Usuarios/Login',options);
     const dt = await response.json();
   }
  Login(event) {
    
    if (this.state.Login && this.state.Senha) {
       this.LoginUsuario(this.state);
     }
    else {
      if (!this.state.Login) {
 
        this.setState({ errorusuario: true });
      }
      if (!this.state.senha) {

        this.setState({ errorsenha: true });
      }
    }
    event.preventDefault();
  }
  render() {
    return (
      <div className="col col-sm-12 ">
        <p></p>
        <div className="row">
          <div className=" col-sm-12 col-md-3  col-lg-4 mgtop"></div>
          <div className=" col-sm-12 col-md-6  col-lg-4 mgtop" >
            <form onSubmit={this.Login} noValidate className="col col-sm-12" autoComplete="off">
              <Avatar className="avatar">
                <LockOutlinedIcon />
              </Avatar>
              <Typography  className="alinletra" component="h1" variant="h5">
                Logar
             </Typography>
              <p></p>
              <div>
                  <FormControl required error={this.state.errorusuario}
                    className=" col-sm-12 font" variant="outlined"  >
                    <InputLabel htmlFor="Usuario">Usuario</InputLabel>
                    <OutlinedInput inputProps={{
                      maxLength: 50,
                      required: true
                    }} id="Usuario" value={this.state.Login} type="text"
                      onChange={(event) => { this.setState({ Login: event.target.value, errorusuario: false }) }} label="Usuario" />
                  </FormControl>
              </div>
              <p></p>
              <div>
                  <FormControl required error={this.state.errorsenha} className=" col-sm-12 font" variant="outlined">
                    <InputLabel htmlFor="Senha">Senha</InputLabel>
                    <OutlinedInput inputProps={{
                      maxLength: 20,
                      required: true
                    }} type="password" value={this.state.Senha} maxLength={10}
                      onChange={(event) => { this.setState({ Senha: event.target.value, errorsenha: false }) }} id="Senha" label="Senha" />
                  </FormControl>
              </div>
              <p></p>
              <div>
                <FormControl className=" col-sm-12">
                  <Button type="submit" variant="contained" color="primary">
                    <Typography >
                      Entrar
              </Typography>
                  </Button>
                </FormControl>
              </div>
            </form>
            <p></p>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © SyS  '}

          {new Date().getFullYear()}
          {'.'}
        </Typography>
          </div>
          <div className=" col-sm-12 col-md-3 col-lg-4 mgtop"></div>
        </div>

      </div>
    );
  }
}
import React, { Component } from 'react';
import {Avatar,Button, CssBaseline,TextField,FormControlLabel,Box,Typography,makeStyles,Container,FormControl,InputLabel,Input,OutlinedInput} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../compcss/Login.css';

export class Login extends Component {
  errorusuario = true;
  errorsenha = false;
  static displayName = Login.name;
  constructor(props){

    super(props);
      this.state = {
        Usuario:"",
        Senha:""
      };
    this.Login = this.Login.bind(this);
  }
  Login(){
    debugger;
     if(this.state.Usuario != "" && this.state.Senha != ""){
      
     }
     else{
       if(this.state.Usuario == ""){
         this.errorusuario = true;
       }
       if(this.state.senha == ""){
        this.errorsenha = true;
      }
     }
    
  }
  render () {
    return (
      <div className="col col-sm-12 ">
        <p></p>
        <div className="row">
        <div className=" col-sm-12 col-md-3 col-lg-4"></div>
        <div className=" col-sm-12 col-md-6 col-lg-4">
           <form onSubmit={this.Login} noValidate className="col col-sm-12"  autoComplete="off">
           <Avatar className="avatar">
           <LockOutlinedIcon />
           </Avatar>
           <Typography className="alinletra" component="h1" variant="h5">
          Logar
           </Typography>
           <p></p>
          <div>
          <FormControl required error={this.errorusuario}  className=" col-sm-12" variant="outlined">
          <InputLabel htmlFor="Usuario">Usuario</InputLabel>
          <OutlinedInput required id="Usuario" value={this.state.Usuario} 
           onChange={(event)=>{this.setState({Usuario:event.target.value})}} label="Usuario" />
          </FormControl>
           </div>
           <p></p>
           <div>
          <FormControl required error={this.errorsenha} className=" col-sm-12" variant="outlined">
          <InputLabel htmlFor="Senha">Senha</InputLabel>
          <OutlinedInput type="password" value={this.state.Senha} 
          onChange={(event)=>{this.setState({Senha:event.target.value})}} id="Senha" label="Senha" />
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
         </div>
         <div className=" col-sm-12 col-md-3 col-lg-4"></div>
         </div>
    </div>
    );
  }
}
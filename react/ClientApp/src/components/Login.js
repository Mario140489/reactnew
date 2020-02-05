import React  ,{ Component } from 'react';
import {Avatar,Button, Backdrop,CircularProgress,Typography,makeStyles,Container,FormControl,InputLabel,Input,OutlinedInput, Hidden} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../compcss/Login.css';
import 'typeface-roboto';
import  AcessoApi from '../Servicos/AcessoApi';
import  {Espera} from  './Espera';
var Api = new AcessoApi(); 

export class Login extends Component {
  static displayName = Login.name;
  
  constructor(props) {
    super(props);
    this.state = {
      Login: "",
      Senha: "",
      show:false
    };
    this.erros = {
      errorusuario:false,
      errorsenha:false,
    };
    this.Login = this.Login.bind(this);
  }
  
   async LoginUsuario(data){
     debugger;
     const url = 'api/Usuarios/Login';
     const result = await Api.ApiPost(url,data);
       if(result.length > 0){
        this.setState({show:false})
         alert('ok');
       }
   }
  async Login() {
       this.setState({show:true})
    if (this.state.Login && this.state.Senha) {
       await this.LoginUsuario(this.state);
     }
    else {
      if (!this.state.Login) {
 
        this.setState({ errorusuario: true });
      }
      if (!this.state.senha) {

        this.setState({ errorsenha: true });
      }
    }
    this.setState({show:false})
  }
  render() {
    return (
      <div className="col col-sm-12 ">
        { this.state.show ?
        <Espera></Espera>
        :null
        }
        <div className="row">
          <div className=" col-sm-12 col-md-3  col-lg-4 mgtop"></div>
          <div className=" col-sm-12 col-md-6  col-lg-4 mgtop" >
            <form  noValidate className="col col-sm-12" autoComplete="off">
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
                  <Button onClick={this.Login} variant="contained" color="primary">
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
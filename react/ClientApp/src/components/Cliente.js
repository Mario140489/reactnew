import React, { Component } from 'react';
import {Typography,Table,TableBody,TableCell,TableContainer,
TableHead,TableRow,Paper,Card,CardContent,IconButton,Tooltip  } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import  {Espera} from  './Espera';
export class Cliente extends Component {
  static displayName = Cliente.name;
  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }
  componentDidMount() {
    this.pulardata();
  }
  static renderForecastsTable(forecasts) {
    return (
            <div> 
                <p></p>
                <Typography variant= "h4">
                Cliente     
                </Typography>
                <hr/>
                <Card className="cemporcento">
                  <CardContent>
                <TableContainer >
                  <div align="Right" >
                    <Tooltip title="Adicionar">
                    <IconButton><AddIcon/></IconButton>
                    </Tooltip>
                    </div>
                  <hr></hr>
              <Table  aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID Cliente</TableCell>
                    <TableCell >Nome</TableCell>
                    <TableCell >Cpf</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {forecasts.map(forecast => (
                    <TableRow key={forecast.id_cliente}>
                      <TableCell component="th" scope="row">
                        {forecast.id_cliente}
                      </TableCell>
                      <TableCell >{forecast.nome}</TableCell>
                      <TableCell >{forecast.cpf}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </CardContent>
            </Card>
            </div>
    );
  }
   render () {
       this.pulardata();
    let contents = this.state.loading
    ? <Espera/>
    : Cliente.renderForecastsTable(this.state.forecasts);
    return(
       <div>
           {contents}
       </div>
    );
   
  }
  async pulardata() {

    const response = await fetch('api/Clientes');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });

  }
}
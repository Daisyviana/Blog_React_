import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import Carrossel from '../../components/carrossel/Carrosel';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          navigate("/login")
        }
    }, [token])
    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h4" gutterBottom color="textPrimary" component="h4" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        <ModalPostagem />
                        </Box>
                        <Button variant="outlined" className='botao'>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.pinimg.com/originals/4d/e9/25/4de925596a451772e2a2ed33c76c94ba.gif" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
            <Grid container style={{ marginTop: "8px" }}>
      <Grid item xs={12}>
        <Carrossel />
        <TabPostagem/>
      </Grid>
    </Grid>
        </>
      
      
      );
    }
    
    export default Home;
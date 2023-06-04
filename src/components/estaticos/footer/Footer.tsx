import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import { UserState } from '../../../store/token/Reducer';
import { useSelector } from 'react-redux';

function Footer() {
   
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    var footerComponent

    if (token !== '') {
        footerComponent = (
          <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#B43DA0", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{ color: "white" }}>Siga-me nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Daisyviana" target="_blank">
                                <GitHubIcon style={{ fontSize: 60, color: "#7F027F" }} />
                            </a>
                            <a href="https://instagram.com/daisy_dkv" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "#7F027F" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/daisyviana" target="">
                                <LinkedInIcon style={{ fontSize: 60, color: "#7F027F" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#B43DA0", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Daisy Kelly Viana </Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "black" }} align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
       
        )
    }
    return (
        <>
            {footerComponent}
        </>
    )
}
    export default Footer;
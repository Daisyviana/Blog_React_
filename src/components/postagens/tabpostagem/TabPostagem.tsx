import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered style={{ backgroundColor: '#AB3D99' }} onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className="titulo">Minha história</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Era uma vez uma menina chamada Daisy. Desde muito pequena, ela sempre foi fascinada pelo mundo da tecnologia e dos computadores. Enquanto outras crianças brincavam com bonecas e carrinhos, Daisy preferia desmontar os eletrônicos e explorar como funcionavam por dentro.

            Daisy sonhava em se tornar uma desenvolvedora de software de sucesso. Ela imaginava criar aplicativos inovadores que pudessem melhorar a vida das pessoas e resolver problemas do mundo real. Seu maior desejo era deixar uma marca positiva através de seu trabalho.

            Apesar de seu entusiasmo e paixão pela programação, Daisy enfrentava desafios em seu caminho. Muitas vezes, ela era a única menina em suas aulas de programação e sentia-se desencorajada pela falta de representatividade feminina na área de tecnologia. No entanto, ela não deixou que isso a detivesse.

            Daisy estava determinada a provar que gênero não deveria ser um obstáculo para seguir sua paixão. Ela buscou oportunidades de aprendizado adicionais, participou de workshops e conferências, e encontrou mentores que a apoiaram e encorajaram em sua jornada.

            Ao longo dos anos, Daisy aprimorou suas habilidades de programação e começou a desenvolver pequenos projetos por conta própria. Ela adquiriu conhecimentos em diferentes linguagens de programação, desenvolvimento de aplicativos móveis e até mesmo inteligência artificial.

            À medida que Daisy crescia, sua confiança e determinação também aumentavam. Ela percebeu que seu sonho de se tornar uma desenvolvedora de sucesso estava se tornando uma realidade. Ela se inscreveu em uma renomada universidade de tecnologia e iniciou uma carreira promissora na indústria.

            Daisy nunca perdeu de vista o propósito que a impulsionava. Ela se esforçou para criar aplicativos que fizessem a diferença, desde soluções para problemas ambientais até ferramentas que promoviam a inclusão e a igualdade de oportunidades.

            Com o tempo, Daisy se tornou uma referência em sua área. Ela inspirou outras jovens a seguirem seus sonhos e mostrou que ser uma mulher na tecnologia era algo poderoso e valioso.

            A jornada de Daisy para se tornar uma desenvolvedora de sucesso não foi fácil, mas sua paixão, perseverança e determinação a levaram além de suas próprias expectativas. Ela provou que os sonhos podem se tornar realidade quando se acredita em si mesma e se dedica a alcançá-los.

            E assim, a menina Daisy, que sonhava em ser uma desenvolvedora de sucesso, deixou sua marca no mundo da tecnologia, inspirando gerações futuras a seguirem seus próprios sonhos e a transformarem o mundo através da inovação tecnológica.</Typography>
        
        </TabPanel>

      </TabContext>

    </>
  );
}

export default TabPostagem;
import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listatema/ListaTema';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';


function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/cadastrousuario" element={<CadastroUsuario/>} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/formularioPostagem" element={<CadastroPostagem />} />
           <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
           <Route path="/formularioTema" element={<CadastroTema />} />
           <Route path="/formularioTema/:id" element={<CadastroTema />} />
           <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
           <Route path="/deletarTema/:id" element={<DeletarTema />} />

          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
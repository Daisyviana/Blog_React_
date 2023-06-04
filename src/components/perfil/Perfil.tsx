import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import User from '../../models/User';
import { buscaId } from '../../services/Service';
import { addToken } from '../../store/token/Actions';
import { UserState } from '../../store/token/Reducer';
import './Perfil.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Perfil() {

    let history = useNavigate()

    const dispatch = useDispatch()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (token === "") {
            toast.error('Usuário não autenticado!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
            history("/login")
        }
    }, [token])

    // Método para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        try {
            await buscaId(`/usuarios/${id}`, setUser, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.response?.status === 403) {
                dispatch(addToken(''))
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <Box className='card-principal'>
            <Box className='card-container-imagem'>
                <img className='card-imagem'
                    src={user.foto}
                    alt={user.nome} />
                <Link to="/atualizarusuario" className="text-decorator-none">
                    <Button variant="contained" color="info" >
                        Editar Perfil
                    </Button>
                </Link>
            </Box>


            <Box className='card-container-info'>
                <Box>
                    <h1>{user.nome}</h1>
                    <h3>{user.usuario}</h3>
                    <hr />
                </Box>

                <p className='card-container-texto'>
                    Bem-vindo ao meu blog!

                    É com grande alegria que recebo você neste espaço dedicado ao compartilhamento de conhecimento, reflexões e inspiração. Aqui, buscaremos explorar diversos temas, desde tecnologia e ciência até arte, cultura e estilo de vida. A proposta é criar um ambiente acolhedor, onde possamos trocar ideias, aprender juntos e expandir nossos horizontes.

                    Ao longo das postagens, espero poder oferecer insights, dicas práticas e perspectivas interessantes sobre os assuntos que abordaremos. Acredito que a busca pelo conhecimento é uma jornada contínua, e este blog nasce com o propósito de contribuir para o seu crescimento pessoal e profissional.

                    Além disso, também incentivarei a participação ativa dos leitores, pois acredito que as melhores conversas surgem a partir da colaboração e do compartilhamento de diferentes pontos de vista. Portanto, sinta-se à vontade para deixar seus comentários, sugestões e perguntas em cada artigo. Estou ansioso para conhecer sua opinião e enriquecermos juntos essa experiência.

                    Aproveite o conteúdo que será disponibilizado regularmente e permita-se mergulhar em cada texto, explorando novas ideias, aprofundando-se em tópicos que lhe interessem e, quem sabe, encontrando respostas para suas perguntas.

                    Mais uma vez, seja muito bem-vindo ao meu blog! Espero que você desfrute dessa jornada conosco e que cada visita seja uma oportunidade de aprendizado e inspiração.

                    Compartilhemos conhecimento, cresçamos juntos!

                    Atenciosamente,
                    Day Viana 😊
                </p>

            </Box>
        </Box>
    )
}

export default Perfil;

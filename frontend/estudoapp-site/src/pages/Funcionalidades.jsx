import ListaFuncionalidades from "../components/ListaFuncionalidades"
import Container from 'react-bootstrap/Container'
import Banners from "../components/Banners"
import { useEffect, useState } from "react"
import CmsApi from '../api/CmsApi'

function Funcionalidades() {
    const [funcionalidades, setFuncionalidades] = useState([])

    useEffect(() => {
        async function fetchFuncionalidades() {
            const response = await CmsApi().getFuncionalidades()
            if (!response.ok) {
                alert('Erro ao carregar funcionalidades')
                return
            }
            const funcionalidades = await response.json()
            setFuncionalidades(funcionalidades.data)
        }

        fetchFuncionalidades()
    }, [])

    return (
        <>
            <Banners />
            <Container className="conteudo-margin">
                <h1>Funcionalidades</h1><hr />

                <p>Com certeza! Nosso site de compartilhamento de livros é muito fácil e intuitivo de usar. Para ter acesso aos livros disponíveis em nosso acervo, é necessário realizar um cadastro em nossa plataforma. Esse cadastro é rápido e gratuito, e permite que você tenha acesso a todos os livros do nosso acervo.</p>

                <p>Após o cadastro, o usuário deve realizar o compartilhamento de um livro próprio que tenha em seu acervo pessoal. Essa iniciativa tem como objetivo incentivar o compartilhamento de experiências e conhecimentos entre os usuários da nossa comunidade, e tornar nossa plataforma cada vez mais rica e diversificada em termos de livros disponíveis.
                </p>
                <p>No que se refere aos formatos de compartilhamento de arquivos para ebook, existem diversas opções disponíveis. Aqui estão quatro tipos de compartilhamento que você pode encontrar em nossa plataforma:
                </p>

                <ul>
                    <li>
                        <p>PDF: esse é um dos formatos mais comuns para ebooks, e é compatível com a maioria dos dispositivos eletrônicos.
                        </p>
                    </li>
                    <li>
                        <p>EPUB: esse é outro formato popular para ebooks, que permite uma leitura mais confortável e ajustável em diferentes dispositivos.
                        </p>
                    </li>
                    <li><p>MOBI: este formato é especialmente projetado para leitura em dispositivos Kindle da Amazon.</p>

                    </li>
                    <li><p>TXT: este formato é mais simples e compatível com uma ampla variedade de dispositivos.</p>
                    </li>
                </ul>

                <p>Em resumo, nosso site é uma plataforma completa e fácil de usar, que permite aos usuários obter novos conhecimentos, experiências e novas histórias de maneira simples e prática. Para fazer parte da nossa comunidade, basta realizar um cadastro e compartilhar um livro próprio, e assim, ajudar outros usuários a terem acesso a novos materiais de leitura.</p>

                <ListaFuncionalidades funcionalidades={funcionalidades} />
            </Container>
        </>
    );
}

export default Funcionalidades
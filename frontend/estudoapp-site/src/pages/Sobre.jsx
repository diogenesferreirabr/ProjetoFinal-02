import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect(() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className='conteudo-margin'>

            <h2>De onde surgiu a ideia?</h2>

            <p>Olá, seja bem-vindo(a) ao nosso site de compartilhamento de livros! A ideia de criar esta plataforma surgiu da minha paixão por leitura e da vontade de proporcionar acesso gratuito a livros de diversos temas para leitores de todo o mundo. Acredito que compartilhar conhecimento é essencial para o desenvolvimento pessoal e profissional de todos nós, e os livros são uma excelente fonte de aprendizado e entretenimento.</p>

            <p>Além disso, percebi que muitos estudantes enfrentam dificuldades para adquirir livros escolares e apostilas, muitas vezes devido aos altos preços desses materiais. Por isso, decidimos incluir em nosso acervo obras de diversas áreas do conhecimento, com o objetivo de ajudar os alunos a ampliar seus estudos e se preparar para provas e concursos.</p>

            <p>Aqui na "Asociedade dos Livros", valorizamos não apenas a leitura, mas também a troca de experiências entre os usuários. Por isso, para fazer parte da nossa comunidade, é preciso se cadastrar e compartilhar uma nova história que se remete a um dos livros disponíveis em nosso acervo. Essa iniciativa tem como objetivo estimular a criatividade dos leitores e proporcionar um ambiente colaborativo e enriquecedor para todos.</p>

            <p>Estamos sempre em busca de novas formas de aprimorar nossa plataforma e torná-la cada vez mais útil e acessível para todos. Espero que você possa desfrutar de todas as funcionalidades do site e encontrar os livros que procura para enriquecer seu conhecimento e sua vida.</p><hr /><br />


            <h1>Sobre</h1> <hr />

            <p>Com certeza! Como mencionei anteriormente, a ideia de criar o site de compartilhamento de livros surgiu a partir da minha paixão pela leitura e da minha vontade de proporcionar acesso gratuito a livros de diversos temas para leitores de todo o mundo. Além disso, percebi que muitos estudantes enfrentam dificuldades para adquirir livros escolares e apostilas, muitas vezes devido aos altos preços desses materiais.</p>

<p>A partir dessa observação, decidimos criar uma plataforma que pudesse ajudar esses estudantes a terem acesso a materiais de qualidade e de forma gratuita. Para isso, selecionamos livros de diversas áreas do conhecimento, incluindo romances, aventuras, dramas, poemas, e muitos outros temas, e disponibilizamos tudo isso em um único lugar, de fácil acesso e navegabilidade.</p>

<p>Entendemos que a educação é um direito de todos, e que muitas vezes a falta de acesso a materiais didáticos e de leitura pode impedir o desenvolvimento pessoal e profissional de muitas pessoas. Por isso, nosso site tem o objetivo de democratizar o acesso à leitura e ao conhecimento, ajudando estudantes e leitores a ampliarem seus horizontes e a alcançarem seus objetivos.</p>

<p>Nosso diferencial é que além de disponibilizar os livros, incentivamos a participação ativa dos usuários na comunidade "Asociedade dos Livros", por meio do compartilhamento de novas histórias relacionadas às obras do nosso acervo. Isso cria um ambiente colaborativo e enriquecedor, onde todos podem aprender e se desenvolver juntos.</p>

<p>Em resumo, nosso site é uma ferramenta poderosa de compartilhamento de conhecimento, que visa ajudar estudantes e leitores a terem acesso a materiais de qualidade de forma gratuita, e a participarem de uma comunidade dinâmica e colaborativa de leitores apaixonados.</p><br/><br/><br/>





            <p>{sobre.text}</p>
            <Depoimentos />
        </Container>
    );
}

export default Sobre
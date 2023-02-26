import {Container, Button, Form} from 'react-bootstrap'
//import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <h1>Contato</h1><br/>
            <h5>Duvidas em como realizar o compartilhamento de seu arquivo, não saber como baixar o documento certo para o seu celular, computador ou Ebook?</h5>

            <h5>Entre em contato, iremos te atender o mais rapido possivel.</h5><br/>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar contato
                </Button>
            </Form>

            
        </Container>
    );
}

export default Contato;
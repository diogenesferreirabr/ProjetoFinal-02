import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1532103840122-d3110d6beda1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8ZWJvb2t8fHx8fHwxNjc3NDMxOTkz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                    <Card.Body>
                        <Card.Title>Fácil de usar</Card.Title>
                        <Card.Text>
                        Compartilhe e baixe livros em formato PDF com facilidade em nosso site. Tornamos o compartilhamento de leitura mais simples e acessível para todos!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o EstudoApp</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Icecat1-300x300.svg/450px-Icecat1-300x300.svg.png?20111013192325" />
                    <Card.Body>
                        <Card.Title>Rápido e confiável</Card.Title>
                        <Card.Text>
                        Acesso rápido e seguro a livros em PDF. Compartilhe e baixe seus títulos favoritos com facilidade em nossa plataforma confiável
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                            <Button variant="warning">Conheça mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWp1ZGF8fHx8fHwxNjc3NDMyNzAy&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            A Sociedade dos Livros oferece suporte personalizado para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
        </Row>
    );
}

export default Destaques;
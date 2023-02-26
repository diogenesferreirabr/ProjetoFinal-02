import Container from 'react-bootstrap/Container';

function Rodape() {
    return (
        <footer className="rodape mt-5 border-top border-dark border-2">
        <Container className='text-center py-3'>
            <p>Todos os direitor preservados &copy; 2007</p>
            <p>Nos siga em nossas redes sociais.</p>
            <p>Entre em contato</p>

        </Container>
        </footer>
    );
}

export default Rodape
import Container from 'react-bootstrap/Container';

function Rodape() {
    return (
        <footer className="rodape mt-5 border-top border-dark border-2">
        <Container className='text-center py-3'>
            <p>Todos os direitor preservados &copy; 2007</p>
            <ul>
        <li><a href="#">Termos de serviço</a></li>
        <li><a href="#">Política de privacidade</a></li>
        <li><a href="#">Contato</a></li>
      </ul>

        </Container>
        </footer>
    );
}

export default Rodape
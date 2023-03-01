import Container from 'react-bootstrap/Container';
import './style.css';

function Rodape() {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="rodape mt-5 border-top border-dark border-2" style={{ backgroundColor: 'orange' }}>
      <Container className='text-center py-3'>
        <p>Todos os direitos reservados &copy; 2007</p>
        <ul>
          
        </ul>
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/3955/3955011.png" width="40" alt="Facebook logo"></img>  
            <i className="fab fa-facebook fa-lg mx-3"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/1377/1377213.png" width="40" alt="LinkedIn logo"></img>
            <i className="fab fa-github fa-lg mx-3"></i>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" width="40" alt="Github logo"></img>
            <i className="fab fa-linkedin fa-lg mx-3"></i>
          </a>
          <button className="back-to-top" onClick={handleBackToTop}>
            <i className="fas fa-arrow-up"></i>
            
          </button>
        </div>

        <div>
        <a href="https://wa.me/5511999999999?text=Olá! Gostaria de obter mais informações sobre seus produtos." className="whatsapp-float" target="_blank">
  <img src="https://cdn-icons-png.flaticon.com/512/3670/3670051.png" alt="WhatsApp logo" width="40" />
</a>

        </div>
      </Container>
    </footer>
  );
}

export default Rodape;


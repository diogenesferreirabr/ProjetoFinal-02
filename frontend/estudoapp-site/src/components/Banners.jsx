import Carousel from 'react-bootstrap/Carousel'
import carousel01 from '../../public/imagens/carousel01.png'
import carousel02 from '../../public/imagens/carousel02.png'
import carousel03 from '../../public/imagens/carousel03.png'
import carousel04 from '../../public/imagens/carousel04.1.png'
import ancora from '../../src/pages/Sobre.jsx'

function Banners() {
    return (
        <Carousel variant="dark" className='conteudo-margin'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src= {carousel01}   //é o nome da imagem importada, não necessario por o caminho       //"https://source.unsplash.com/random/1500x300/?livros"
                        alt="Slide incrível"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel02}
                        alt="Outro slide incrível"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={carousel03}
                        alt="Último slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item>
                
                    <img
                        className="d-block w-100"
                        src={carousel04}
                        alt="Último slide"
                    />
                
                </Carousel.Item>
            </Carousel>
    )
}

export default Banners
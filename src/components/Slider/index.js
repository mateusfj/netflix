import "./Slider.css";
import Slider from "react-slick";

/* OBS = 1 passo é instalar o react-slick

2 passo é incluir o css no head do index.html

3 passo é criar o componente

No componente cria uma varialvel que receber as configuracoes do slider
observa-se que o componente tem que por o children pois os cards sao seus filhos
entao importa o Slider de react-slick e passa as configuracoes por meio do expred operator 


*/



function Slide({children}) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeigth:true,
    variableWidth:true,
    slidesToShow: 4,
    slidesToScroll: 6,
  }; 

  return(
    <div>
        <Slider {...settings}>
            {children}
        </Slider>
    </div>
  );
}

export default Slide;
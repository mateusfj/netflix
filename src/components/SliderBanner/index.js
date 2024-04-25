import "./SliderBanner.css"
import Slider from "react-slick";

function SliderBanner({children}){
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: null,
        speed: 2000,
        autoplaySpeed: 10000,
        cssEase: "linear",
    };


    return(
        <div className="sliderBanner">
            <Slider {...settings} className="slider">
                {children}
            </Slider>
        </div>
    );
}

export default SliderBanner;

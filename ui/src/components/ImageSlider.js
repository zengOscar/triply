import React, {useState} from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import './Slider.css'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <=0) {
        return null;
    }



    return (
        <section className="slider">
            <div>
                <div style={{flexDirection: 'column'}}>
                    <p style={{fontSize: 70, color: 'white', position: 'absolute', top: '40%', left: '40%', zIndex: 1}}>Welcome</p>
                    <p style={{fontSize: 30, fontWeight: 'lighter', color: 'white', position: 'absolute', top: '48%', left: '35%', zIndex: 1}}>What would you like to do today?</p>
                </div>
 
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
                
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt="mountain image" className="image"/>)}
                            
                        </div>
                    )
                    
                })}
            </div>
        </section>
    )
}

export default ImageSlider

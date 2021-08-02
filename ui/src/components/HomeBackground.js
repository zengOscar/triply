import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './HomeBackground.css'


function HomeBackground({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', alignContent: 'stretch', backgroundImage: `url(${img})`}}>
            {/* <img src={img} alt={alt}/> */}
            </div>
        </>
    );
}

export default HomeBackground

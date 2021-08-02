import React from 'react'
import HomeBackground from '../../HomeBackground'
import ImageSlider from '../../ImageSlider'
import { SliderData } from '../../SliderData'
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
            <ImageSlider slides={SliderData}/>
        </>
    )
}

export default Home

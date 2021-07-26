import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjTwo} from './Data'

function Explore() {
    return (
        <>
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjTwo} />
        </>
    )
}

export default Explore

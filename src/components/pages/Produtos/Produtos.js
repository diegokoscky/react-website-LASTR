import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import {homeObjFour} from './Data'

function Produtos() {
    return (
        <>
            <Pricing />
            <HeroSection {...homeObjFour}/>            
        </>
    )
}

export default Produtos

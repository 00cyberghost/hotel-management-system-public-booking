"use client"
import Image from 'next/image'
import HomeSearch from './components/Search/HomeSearch'
import PopularRoom from './components/PopularRoom/Page'
import ExclusiveOffer from './components/ExclusiveOffer/Page'
import FunFact from './components/FunFact/Page'
import RoomPackages from './components/RoomPackages/Page'
import Utilities from './components/Utilities/Page'
import Testimonial from './components/Testimonial/Page'
import HeroSlider from './components/HeroSlider/Page'
import { useEffect } from 'react'

export default function Home() {

    useEffect(() => {
        //nativeJavascript()
    },[])
  return (
    
    <>
        {/* HeroSlider */}
        <HeroSlider /> 

        {/* HomeSearch */}
        <HomeSearch />

        {/* PopularRoom */}
        <PopularRoom />

        {/* ExclusiveOffer */}
        <ExclusiveOffer />

        {/* FunFact */}
        <FunFact />

        {/* RoomPackages */}
        <RoomPackages />

        {/* Utilities */}
        <Utilities />

        {/* Testimonial */}
        <Testimonial />
    </>
   
  )
}

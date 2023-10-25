import React from 'react'
import Header from '../components/Header'
import Products from '../components/Products'
import Banner from '../components/Banner'
import Slider from '../components/Slider'
import ReversedBanner from '../components/ReservedBanner'



const Index = () => {

  return (
    <section className='w-screen h-auto'>
        <Header />
        <Products />
        <Banner />
        <Slider />
        <ReversedBanner />
    </section>
  )
}

export default Index
import React from 'react'
import Header from '@/components/Header'
import Shophero from '@/components/shophero'
import Gallery from '@/components/Gallery'
import Shopcta from '@/components/Shopcta'
import Filter from '@/components/Filter'
import Buttonpg from '@/components/Buttonpg'

const Shop = () => {
  return (
    <div>
      <Header bgColor="#FFFFFF"/>
      <Shophero />
      <Filter />
      <Gallery />
      <Buttonpg />
      <Shopcta />
      
    </div>
  )
}

export default Shop

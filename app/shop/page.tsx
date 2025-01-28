import React from 'react'
import Header from '@/components/Header'
import Shophero from '@/components/shophero'
import ProductListing from '@/components/ProductListing'
import Shopcta from '@/components/Shopcta'
import Footer from '@/components/Footer'

const Shop = () => {
  return (
    <div>
      <Header bgColor="#FFFFFF"/>
      <Shophero />
      
      <ProductListing />
      
      <Shopcta />
      <Footer />
      
    </div>
  )
}

export default Shop

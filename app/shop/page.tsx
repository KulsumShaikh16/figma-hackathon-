import React from 'react'
import Header from '@/components/Header'
import Shophero from '@/components/shophero'
import ProductListing from '@/components/ProductListing'
import Shopcta from '@/components/Shopcta'
// import Filter from '@/components/Filter'
// import Buttonpg from '@/components/Pagination'
import Footer from '@/components/Footer'

const Shop = () => {
  return (
    <div>
      <Header bgColor="#FFFFFF"/>
      <Shophero />
      {/* <Filter /> */}
      <ProductListing />
      {/* <Buttonpg /> */}
      <Shopcta />
      <Footer />
      
    </div>
  )
}

export default Shop

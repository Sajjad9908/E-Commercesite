import React from 'react'
import Nav from './Nav'
import Hero from './Hero'
import Booking from './Booking'
import Shop from './Shop'
import OurNewArrival from './OurNewArrival'
import OurCollection from './OurCollection'
import BestSellingProduct from './BestSellingProduct'

const App = () => {
  return (
   <>
 <div className='bg-gray-50'>
  <Nav/>
  <Hero/>
  </div>
  <Booking/>
  <Shop/>
  <OurNewArrival/>
  <OurCollection/>
  <BestSellingProduct/>

   </>
  )
}

export default App
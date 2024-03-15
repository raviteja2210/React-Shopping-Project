
import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collection from '../components/Collection'
import Footer from '../components/Footer'
import { Gents, Ladies} from '../data'
import WomanCollection from '../components/WomanCollection'

const MainPage = () => {
    const[gentsfashion, setGentsFashion]=useState(Gents)
    const[ladiesfashion, setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collection gentsfashion={gentsfashion}/>
      <WomanCollection ladiesfashion={ladiesfashion}/>
      <Footer/>
    </div>
  )
}

export default MainPage

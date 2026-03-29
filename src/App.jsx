import { Suspense, useState } from 'react'
import './App.css'
import BannerSection from './component/BannerSection/BannerSection'
import FeatureRatting from './component/BannerSection/FeatureRatting'
import Navbar from './component/Navbar/Navbar'
import ProductSection from './component/ProductSection/ProductSection'
import ToolsTap from './component/ToolsTap/ToolsTap'
import CartsSection from './component/CartsSection/CartsSection'

const productPromise = fetch('/data.json').then(res => res.json())

function App() {

  const [carts, setCarts] = useState([])
  const [active, setActive] = useState("product")

  return (
    <>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <FeatureRatting></FeatureRatting>
      <ToolsTap active={active} setActive={setActive}></ToolsTap>
      {active === "product" && 

      <Suspense fallback={<p>Loading....</p>}>
        <ProductSection carts={carts} setCarts={setCarts} productPromise={productPromise}></ProductSection>
      </Suspense>
      }

      {active === "cart" && 
      <CartsSection carts={carts} setCarts={setCarts} ></CartsSection>
      }
    </>
  )
}

export default App

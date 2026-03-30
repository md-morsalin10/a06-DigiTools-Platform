import { Suspense, useState } from 'react'
import './App.css'
import BannerSection from './component/BannerSection/BannerSection'
import FeatureRatting from './component/BannerSection/FeatureRatting'
import Navbar from './component/Navbar/Navbar'
import ProductSection from './component/ProductSection/ProductSection'
import ToolsTap from './component/ToolsTap/ToolsTap'
import CartsSection from './component/CartsSection/CartsSection'
import GetStartedSection from './component/GetStartedSection/GetStartedSection'
import PricingSection from './component/PricingSection/PricingSection'

const productPromise = fetch('/data.json').then(res => res.json())
const pricingPromise = fetch('/pricing.json').then(res => res.json())

function App() {

  const [carts, setCarts] = useState([])
  const [active, setActive] = useState("product")

  return (
    <>
      <Navbar carts={carts}></Navbar>
      <BannerSection></BannerSection>
      <FeatureRatting></FeatureRatting>
      <ToolsTap carts={carts} active={active} setActive={setActive}></ToolsTap>
      {active === "product" && 

      <Suspense fallback={<p>Loading....</p>}>
        <ProductSection carts={carts} setCarts={setCarts} productPromise={productPromise}></ProductSection>
      </Suspense>
      }

      {active === "cart" && 
      <CartsSection carts={carts} setCarts={setCarts} ></CartsSection>
      }

      <GetStartedSection></GetStartedSection>
      <PricingSection pricingPromise={pricingPromise}></PricingSection>


    </>
  )
}

export default App

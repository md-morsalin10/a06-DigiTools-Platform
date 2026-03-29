import './App.css'
import BannerSection from './component/BannerSection/BannerSection'
import FeatureRatting from './component/BannerSection/FeatureRatting'
import Navbar from './component/Navbar/Navbar'
import ProductSection from './component/ProductSection/ProductSection'
import ToolsTap from './component/ToolsTap/ToolsTap'

const productPromise = fetch('/data.json').then(res=> res.json())

function App() {

  return (
    <>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <FeatureRatting></FeatureRatting>
      <ToolsTap></ToolsTap>
      <ProductSection productPromise={productPromise}></ProductSection>
    </>
  )
}

export default App

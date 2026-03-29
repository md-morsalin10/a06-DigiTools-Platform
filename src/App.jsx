import './App.css'
import BannerSection from './component/BannerSection/BannerSection'
import FeatureRatting from './component/BannerSection/FeatureRatting'
import Navbar from './component/Navbar/Navbar'
import ToolsTap from './component/ToolsTap/ToolsTap'

function App() {
 

  return (
    <>
      <Navbar></Navbar>
      <BannerSection></BannerSection>
      <FeatureRatting></FeatureRatting>
      <ToolsTap></ToolsTap>
    </>
  )
}

export default App

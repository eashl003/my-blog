import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getAbout } from "../utils/api" 
import CategoryButtons from "../components/CategoryButtons"
import { getArticles } from "../utils/api"
import { getBlogs } from "../utils/api"
//import background from "../public/background_video.mp4"
import Video from "../components/Video"
import image from "../public/home_background.jpg"

import Slideshow from "../components/Slideshow"

const HomePage = ({ about}) => {
  return (
    <div className="home"> 
      <section className="section-a">
        <Slideshow />
        <div className="slides"></div>
        {/* <img className="image" src={image} alt="logo" height={100} width={100} />*/}
      </section> 
      <section className="section-b">
        
      </section>
      <section className="section-c">
        
      </section>
    </div>
    
  )
}
 

export async function getStaticProps() {
  const about = await getAbout()
  return { props: { about } }
}

  
export default HomePage




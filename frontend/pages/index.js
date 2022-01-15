import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getHome } from "../utils/api" 
import CategoryButtons from "../components/CategoryButtons"
import { getArticles } from "../utils/api"
import { getBlogs } from "../utils/api"
//import background from "../public/background_video.mp4"
import Video from "../components/Video"

const HomePage = ({ home}) => {
  return (
    <div> 
      {home.title}
    </div>
  )
}
 
export async function getStaticProps() {
  const home = await getHome()
  return { props: { home } }
}

export default HomePage

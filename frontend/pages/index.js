import Head from "next/head"
import ProductsList from "../components/ProductsList"
import { getAbout } from "../utils/api" 
import FeaturedList from "../components/Featured"
import PopularPosts from "../components/PopularPosts"
import { getArticles } from "../utils/api"
 
import { getBlogs } from "../utils/api"
import background from "../public/fixing_bugs_slideshow.png"
import Video from "../components/Video"
import image from "../public/home_background.jpg"

import Slideshow from "../components/Slideshow"

const HomePage = ({ articles }) => {

  return (
    <div classNameName="home">  
      <section id="top-section" className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hi, I'm Elisabeth!
              <br className="hidden lg:inline-block"/>Lorem ipsum dolor
            </h1>
            <p className="mb-8 leading-relaxed">Elit eget gravida cum sociis. Semper risus in hendrerit gravida rutrum quisque non tellus. Mauris rhoncus aenean vel elit scelerisque mauris. Porta lorem mollis aliquam ut porttitor leo a diam. Sed faucibus turpis in eu. Id interdum velit laoreet id.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Blog</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Shop</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642443909/altumcode-mCj7UinqOYQ-unsplash_ycf0uu.jpg"/>
          </div>
        </div>
      </section> 
      {/* section section */}
      <div className="flex flex-col text-center w-full mb-20"> 
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Recent Posts</h1>
      </div>
      <section className="text-gray-700 body-font border-t border-gray-200">
        <FeaturedList articles={articles} />
      </section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="flex flex-col text-center w-full mb-20"> 
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Posts</h1>
  </div>
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="feature" className="object-cover object-center h-full w-full" src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642446846/morning-journal.jpg"/>
    </div>
    <PopularPosts  articles={articles}/>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
        "Imagine starting your day writing something of your choosing for a purpose that mattered to you"
  </h1>
      <p className="lg:w-1/2 w-full leading-relaxed text-base">-Kathleen Neagle Sokolowski</p>
    </div>
    <div id="test" className="flex flex-wrap -m-4">
   
       
    </div> 
  </div>
</section>
 
 
 
    </div>
    
  )
}
 

export async function getStaticProps() {
  const articles = await getArticles()
  return { props: { articles } }
}
  
export default HomePage




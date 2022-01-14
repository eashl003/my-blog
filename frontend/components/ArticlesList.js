import NextImage from "./Image"
import Link from "next/link" 
 
const ArticlesList = ({ articles }) => {
 
  return ( 
   <div className="mt-6 mb-10 ml-6 grid md:grid-cols-2">
      {articles.map((_article) => (
      <div key={_article.id} className="flex flex-col md:flex-row mt-8 ">
        <div className="w-full  mr-8">
          <div id="blog-card" className="flex border border-grey-light rounded overflow-hidden shadow">
            <div className="w-full lg:w-2/3 p-4">
              <h3 className="">
                <a href="#" className="font-serif font-bold no-underline hover:underline text-3xl text-black">
                {_article.title} 
                </a>
              </h3>
              <span className="font-sans text-grey-dark">{_article.date_created}
              </span>
             
              <p id="article-descr" className="text-grey-darkest">
              {_article.description}
              </p>
            
              <a href={`/articles/${_article.slug}`} className="no-underline hover:underline text-blue">
                              Continue reading
              </a>
            </div>
            <div className="hidden lg:block lg:w-1/2 mt-2 mb-2 mr-2">
              <NextImage media={_article.image} />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div> 
  ) 
}

export default ArticlesList

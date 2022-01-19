import NextImage from "./Image"
import Link from "next/link" 
 
const RecentList = ({ articles }) => {
 
  return ( 
    <div className="mt-6 mb-8 ml-6 grid md:grid-cols-3">
        {articles.slice(0,3).map((_article) => (
        <div key={_article.id} class="grid mr-12"> 
        <div class="rounded overflow-hidden shadow-lg flex flex-col">
            <a href="#">
            <NextImage media={_article.image} />
            </a>
        <div class="px-6 py-4 mb-auto">
            <div class="mb-3">
                <a href="#" class="text-xs font-bold category-name">
                {_article.category_name} 
                </a> 
           </div>
                <a href="#" class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    {_article.title} 
                </a>
        <p id="article-descr" class="text-gray-500 text-sm">
        {_article.description}
        </p>
        </div>
        </div>
        </div>
        ))}
    </div>
 
  ) 
}

export default RecentList

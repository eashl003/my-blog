import NextImage from "./Image"
import Link from "next/link" 
 
const RecentList = ({ recentArticles }) => {
 
  return ( 
    <div className="mt-6 mb-8 ml-6 grid md:grid-cols-3">
        {recentArticles.slice(0,3).map((_recentArticle) => (
        <div key={_recentArticle.id} className="grid mr-12"> 
        <div className="rounded overflow-hidden shadow-lg flex flex-col mb-8">
            <a href="#">
            <NextImage media={_recentArticle.image} />
            </a>
        <div className="px-6 py-4 mb-auto">
            <div className="mb-3">
                <a href="#" className="text-xs font-bold category-name">
                {_recentArticle.category_name} 
                </a> 
           </div>
                <a href="#" className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                    {_recentArticle.title} 
                </a>
        <p id="article-descr" className="text-gray-500 text-sm">
        {_recentArticle.description}
        </p>
        </div>
        </div>
        </div>
        ))}
    </div>
 
  ) 
}

export default RecentList

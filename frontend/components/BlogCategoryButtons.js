import Link from "next/link"

const BlogCategoryButtons = ({ blogs = [] }) => {
  return (
      <div id="buttons" className="container flex flex-wrap mx-auto gap-2 mt-10">
        {blogs.map((_blog) => (
          <Link href={`/blogs/${_blog.slug}`} key={_blog.id}>
            <a className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              {_blog.name}
            </a>
          </Link>
        ))}
      </div> 
  )
}

export default BlogCategoryButtons

import Link from "next/link"
import NextImage from "./Image"  
import React, { useState } from "react";



const Header = ({ categories = [], blogs = [] }) => {
  
  return (
    <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div className="flex-1 flex justify-between items-center">
     test
    </div>
   
    <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block"
      ><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg
    ></label> 
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
      <nav>
        <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 ml-10 lg:pt-0"> 
          <div id="dropdown">
          <a className="blog-link" id="blog-link" href="/blog">Blog</a>
          <ul id="dropdown-content">
          {blogs && blogs.map((_blog) => {
            return (
              <li key={_blog.id}>
                <Link href={`/blogs/${_blog.slug}`} >
                  <a className="lg:p-1 py-3 px-0 block hover:text-indigo-400"   >
                    {_blog.name}
                  </a>
              </Link>
              </li>
            )
            })}
          </ul>
        </div>

        <div id="dropdown">
          <Link href="/shop">Shop</Link>
          <ul id="dropdown-content">
          {categories.map((_category) => {
            return (
              <li key={_category.id}>
                <Link href={`/categories/${_category.slug}`} >
                  <a className="lg:p-1 py-3 px-0 block hover:text-indigo-400"  >
                    {_category.name}
                  </a>
                  
              </Link>
              </li>
            )
            })}
          </ul>
        </div> 
          <li><a className="lg:p-4 py-3 px-0 block hover:text-indigo-400 " href="/about">About</a></li>
          {/*<li><a className="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2" href="#">Blog</a></li>
          <li><a className="lg:p-4 py-3 px-0 block hover:text-indigo-400 lg:mb-0 mb-2 text-indigo-500" href="#">Sign Up</a></li>*/}
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header



   
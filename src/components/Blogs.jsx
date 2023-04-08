import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import NotFoundBlogs from './NotFoundBlogs'
import Post from './Post'

const Blogs = () => {
  const { loading, posts } = useContext(AppContext)
  // console.log(posts);
  return (
    <div className='w-screen max-w-4xl mx-auto flex flex-col my-4 dark:bg-slate-900'>
      {
        loading ? (<Spinner />) : posts.length === 0 ? (<NotFoundBlogs />) : (posts.map((post) => {
          return <Post key={post.id} post={post} />
        }))
      }
      
    </div>
  )
}

export default Blogs
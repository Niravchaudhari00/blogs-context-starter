import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Post = (props) => {
     const { pageSize } = useContext(AppContext);
     console.log(pageSize);
     return (
          <div className=''>
               <h1 className='text-2xl font-semibold'>{props.post.title}</h1>
               <div className='my-1'>
                    <p>By <span className='italic'>{props.post.author}</span> On <span className='font-semibold underline text-sm'>{props.post.category}</span></p>

                    <p>Posted On {props.post.date}</p>
               </div>
               <div className='my-1'>
                    <p>
                         {props.post.content}
                    </p>
               </div>
               <div className='flex flex-wrap gap-2'>
                    {
                         props.post.tags.map((tag, index) => (
                              <span key={index} className='text-blue-700 font-semibold hover:underline cursor-pointer text-sm'>{`#${tag}`}</span>
                         ))
                    }
               </div>
                    
               <hr className='my-3' />

          </div>
     )
}

export default Post
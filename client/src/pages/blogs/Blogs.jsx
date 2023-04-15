import React, { useEffect, useState } from 'react'
import BlogCarousel from '../../components/blogCarousel/BlogCarousel'
import axios from 'axios'
import './blogs.css'
const Blogs = () => {
const [allblogs, setAllblogs] =useState([])
const [blogIdx, setBlogIdx]=useState('')
 
    const getall=async()=>{
       try {
        const res= await axios.get('https://anime-blog-server.onrender.com/api/v1/blog/all')
        setAllblogs(res.data?.blogs)
        setBlogIdx(res.data?.blogs[0]._id)
       } catch (error) {
        console.log(error)
       }
    }
    useEffect(()=>{
      getall()
    },[])

console.log("all", blogIdx)
  return (
    <div className='blogs-container'>
      <BlogCarousel  blogs={allblogs} blogIdx={blogIdx}/>
      {/* <div className='blogs-wrapper'>
       <div className="blogs-comp">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, quos omnis quis nobis repellat, ea voluptatibus distinctio dignissimos, esse iure harum qui. Eum cum blanditiis laboriosam. Praesentium architecto magni modi repellat nobis asperiores aliquid.</p>
       </div>

      </div> */}
    </div>
  )
}

export default Blogs
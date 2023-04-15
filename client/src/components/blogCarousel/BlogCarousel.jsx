import React, { useState } from 'react';
import './blogCarousel.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SingleBlog from '../singleBlog/SingleBlog';

const BlogCarousel = ({ blogs, blogIdx }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [blogId, setBlogId]=useState('')

  const prevSlide = () => {
    setCurrentSlide((prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => prev + 1);
  };
// console.log("first", blogs)

const handleBlog=(idx)=>{
    setBlogId(idx)
}
// console.log(blogId)
  return (
<>
<SingleBlog  blogId={blogId} blogIdx={blogIdx}/>
<div className='blog-carousel-container'>
      
      <div className='divider'>
        <h2>Short Reads</h2>

        <div className='carousel-controls'>
        <button onClick={prevSlide} >
         <ArrowBackIcon/>
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === blogs.length / 4- 1}
        >
        <ArrowForwardIcon/>
        </button>
      </div>
      </div>
      <div
        className='carousel-slide'
        style={{
          transform: `translateX(-${currentSlide * 9}%)`,
        }}
      >
       
        {blogs.map((blog) => (
             <div className='single-blog' key={blog._id}>
          <div className='blog-item' onClick={()=>handleBlog(blog?._id)} >
            <img src={blog.image} alt={blog.title} />
           <div className='blog-data'>
           <h4>{blog.title.substr(0, 10)}...</h4>
            <p>{blog.description.substr(0, 50)}...</p>
           </div>
          </div>
          </div>
        ))}
      
      </div>
    
    </div>
</>
   
  );
};

export default BlogCarousel;

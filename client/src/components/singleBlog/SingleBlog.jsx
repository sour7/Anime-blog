import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './singleBlog.css'
import StarRateIcon from '@mui/icons-material/StarRate';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useNavigate } from 'react-router-dom';
import Form from "../form/Form"
import toast from 'react-hot-toast';
const SingleBlog = ({blogId, blogIdx}) => {
    const [open, setOpen]= useState(false)
    const [blogData, setBlogData]= useState({})
    const [backgroundImage, setBackgroundImage] = useState();
    const userId=localStorage.getItem('userId')
    const navigate= useNavigate()
    const [id, setId] = useState('')
    //  console.log(blogId)
    useEffect(()=>{
        const getSingleBlog=async()=>{
            try {
                const res= await axios.get(`https://anime-blog-server.onrender.com/api/v1/blog/get/${blogId||blogIdx}`)
                setBlogData(res.data)
                setBackgroundImage(res.data?.blog?.image)
            } catch (error) {
                console.log(error)
            }
        }
        getSingleBlog()
    }, [blogId, blogIdx])
    // console.log("blogData",blogData)

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        width: '100%',
        height: '400px',
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
     

      };

      const hanldeEdit=(id)=>{
        setOpen(!open)
        setId(id)
      }

      const hanldeDelete=async(id)=>{
        try {
            await axios.delete(`https://anime-blog-server.onrender.com/api/v1/blog/delete/${id}`)
            toast.success("your blog deleted")
        } catch (error) {
           console.log(error) 
        }
        window.location.reload()
       }
    

  return (
    <>
    <div className='singleblog-contaner'>
        <div className="singleblog-wrapper">
           
            <div style={styles}>
            <div className="singleblog-head" >
               
                    <h2>{blogData?.blog?.title}</h2>
                    <div>
                    <StarRateIcon style={{color:"#FFF510", fontSize:"54px"}}/>
                    <StarRateIcon style={{color:"#FFF510", fontSize:"54px"}}/>
                    <StarRateIcon style={{color:"#FFF510", fontSize:"54px"}}/>
                    <StarRateIcon style={{color:"#FFF510", fontSize:"54px"}}/>
                    <StarRateIcon style={{color:"#FFF510", fontSize:"54px"}}/>
                    </div>

          </div>   
          </div>
            <div className="singleblog-title">
            <h2>{blogData?.blog?.title}</h2>
            <div>
           {
            blogData?.blog?.user==userId&&
            <EditRoundedIcon  onClick={()=>hanldeEdit(blogData?.blog?._id)} style={{"cursor":"pointer"}}/>
           }
             {
            blogData?.blog?.user==userId&&
            <DeleteIcon  onClick={()=>hanldeDelete(blogData?.blog?._id)} style={{"cursor":"pointer"}}/>
           }
           </div>
            </div>
            <hr />
            <div className="singleblog-desc">
            <p>{blogData?.blog?.description}</p>
            </div>
        </div>

    </div>
{
    open&&
    <div className='editfrom-container'>
        <Form  blogData={blogData} id={id} setBlogData={setBlogData} data={"Edit"} open={open} setOpen={setOpen}/>
    </div>
}

    </>
  )
}

export default SingleBlog
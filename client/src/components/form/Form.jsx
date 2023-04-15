import React, { useEffect, useState } from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import "./form.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';
const Form = ({ open, setOpen, blogData, setBlogData,data }) => {
  // console.log("edit ", blogData);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [input, setInput] = useState({
    title: "",
    image: "",
    description: "",
  });
  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const createBlog = async () => {
 
 
    try {
      const { data } = await axios.post(
        "https://anime-blog-server.onrender.com/api/v1/blog/create",
        {
          title: input.title,
          description: input.description,
          image: input.image,
          user: userId,
        }
      );

      if (data.success) {
        toast.success("blog Created");
        setOpen(false);
        navigate("/");
        location.reload();
      }
    } 
    
    catch (error) {}
  };
  // console.log("first", input);


const editBlog=async()=>{
  
  try {
    const {data}= await axios.put(`https://anime-blog-server.onrender.com/api/v1/blog/update/${blogData.blog._id}`, {title:input.title, image:input.image, description:input.description})
    if(data.success){
      toast.success("blog updated");
      setBlogData(data?.blog)
      setOpen(!open)
      location.reload();
    }
  } catch (error) {
    console.log(error)
  }
 
}

// useEffect(()=>{
//   editBlog()
// },[blogData?.blog?._id])

  
  return (
    <>
      <div className="navbar-form" >
        <div className="navbar-form-container">
          <div className="navbar-form-wrapper">
            <div
              style={{
                textAlign: "right",
                padding: "20px 30px",
                cursor: "pointer",
              }}
              onClick={() => setOpen(false)}
            >
              <HighlightOffRoundedIcon />
            </div>
            <div className="navbar-forms">
              <h3>Create/Edit Blog</h3>
           
                <div className="navbar-inputs">
                  <label htmlFor="image">Image</label>
                  <input
                    type="text"
                    id="image"
                    placeholder="enetr img url of blog"
                    onChange={(e) => handleChange(e)}
                    defaultValue={blogData?.blog?.image}
                  />
                </div>
                <div className="navbar-inputs">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    id="title"
                    placeholder="enetr title of blog"
                    onChange={(e) => handleChange(e)}
                    defaultValue={blogData?.blog?.title}
                  />
                </div>
                <div className="navbar-inputs">
                  <label htmlFor="description">description</label>
                  <textarea
                    name=""
                    id="description"
                    cols="30"
                    rows="5"
                    placeholder="enetr title of blog"
                    onChange={(e) => handleChange(e)}
                    defaultValue={blogData?.blog?.description}
                  />
                </div>
                <div className="navbar-inputs">
                  {
                    data==="submit"&&<button type="submit" className="form-button" onClick={createBlog} >
                    submit
                   </button>
}
{data==="Edit"&&
                   <button type="submit" className="form-button" onClick={editBlog} >
                   Edit
                  </button>
                  }
                </div>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

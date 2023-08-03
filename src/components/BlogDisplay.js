import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import{ db } from '../firebaseConfig';

const BlogDisplay = () => {
const [blogs, setBlogs] = useState([]);

useEffect(()=>{
  const blogref = collection(db,"Blogs");
  const q = query(blogref, orderBy("createdat", "desc"))

  onSnapshot(q,(snapshot)=>{
    // console.log(snapshot);
    const allBlogs = snapshot.docs.map((docs)=>(
      {
        id:docs.id,...docs.data()
      })
    )
    setBlogs(allBlogs)
  })
},[])

  return (
    <div className='h-[100vh] overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 scroll-m-0'>
      <div className='snap-y scrollbar-w-0'>
        {blogs.length === 0 ? (<p>No Blogs found</p>) : (blogs.map((blog) => 
          <div className='blog-cont md:w-[40vw] flex' key={blog.id}>
             {/* <div className='section1'>
              <p>{blog.title}</p>
              <p>{blog.createdby}</p>
             </div>
             <div className='section2'>
              <p><img src={blog.imgurl}></img>
              {blog.discription}
              </p>
             </div>
             <div className='section3'>
              <p>Posted on- {blog.createdat}</p>

             </div> */}

             <div className='w-full shadow-xl flex flex-col hover:backdrop-blur-lg p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={blog.imgurl} alt="img" />
            <h2 className='font-bold text-xl text-center py-4'>{blog.title}</h2>
            <p className='flex pb-2 space-x-1 justify-center font-medium'>{blog.createdby}</p>
            <p className='text-left font-medium'>{blog.discription}</p>
            <p className='text-left'>Posted on- {blog.createdat}</p>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogDisplay

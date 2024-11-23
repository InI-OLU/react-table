import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SinglePost = () => {
  const path =window.location.href;
  const url = path.split('/')
  const id = url[url.length - 1]

 
  const [post, setPost] = useState({})

  const getData = async () =>{
    const response = await axios.get(`https://dummyjson.com/posts/${id}`)
    if(response?.statusText === 'OK'){
        setPost(response.data)
    } else {
        console.error(response)
    }
  }

  useEffect(() => {
    getData()
  },[])
  return (
    <div>{post?.title}</div>
  )
}

export default SinglePost
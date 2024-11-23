import React, { useEffect, useState } from "react";
import axios from "axios";
import './post.css'
import { Link } from "react-router-dom";
import  './post.css'

const Post = () => {
  //CRUD CREATE, READ, UPDATE , DELETE
  //POST request,GET request,PUT request , DELETE request

  const [posts, setPosts] = useState([]);

const [loading,setLoading] =useState(true)

  const getData = async () => {
    setLoading(true)
    await axios
      .get("https://dummyjson.com/posts?limit=10")
      .then((response) => {
        setPosts(response.data.posts);
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setLoading(false)
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="create">
      <p>All Posts</p>
      <Link to='/post/create' className="links">Create</Link>
      </div>
      <div className="post">
      { loading ? <p>Loading.......</p>:posts.map((items) => (
        <p key={items?.id} className="allpost">
          {items?.title}
          <Link to = {`/post/${items.id}`} className="view">View</Link>
        </p>
      ))}
      </div>
    </div>
  );
};

export default Post;

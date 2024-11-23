import React from "react";
import { useState } from "react";
import "./createpost.css";
import Forminput from "../../Components/input/Forminput";
import axios from "axios";
import { toast } from "react-toastify";

const Createpost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async () => {
    setLoading(true);

    if (title.trim() === "") {
      toast.warning("Title cant be empty");
      setLoading(false);
      return false;
    }

    if (body.trim() === "") {
      toast.warning("Body cant be empty");
      setLoading(false);
      return false;
    }
    const response = await axios.put("https://dummyjson.com/posts/add/10", {
      title: title,
      body: body,
      userId: 100,
    });
     if(response.statusText === 'Created'){
      toast.success('Post has been created successfully')
      setBody('')
      setTitle('')
     }else{
      toast.error('An error occured')
     }
    setLoading(false);
  };

  return (
    <div className="container">
      <p className="newpost">Create a new post</p>
      <div className="input">
        <Forminput
          name="Title"
          placeholder="Enter a title"
          label="Title"
          value={title}
          setValue={setTitle}
        />
        <Forminput
          name="Body"
          placeholder="Enter the body"
          label="Body"
          value={body}
          setValue={setBody}
        />
        <button onClick={handleSubmit}>
          {loading ? "Creating...... " : "Create Post"}
        </button>
      </div>
    </div>
  );
};

export default Createpost;

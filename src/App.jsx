import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/profile";
import Post from "./Pages/post/Post";
import SinglePost from "./Pages/singlePost/SinglePost";
import Createpost from './Pages/createpost/createpost'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/login/login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Login/>} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/post" element={<Post />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/post/create" element={<Createpost />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};
export default App;

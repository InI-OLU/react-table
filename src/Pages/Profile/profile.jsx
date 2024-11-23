import { useEffect, useState } from "react";
import Layout from "../../Components/layout/layout";
import Cookies from "js-cookie";
import axios from "axios";

const Profile = () => {
  const data = Cookies.get("Profile");
  const user = JSON.parse(data);
  const [loading, setLoading] = useState(true);
  const [profile,setProfile] = useState({})

  const getUserData = async () => {
    setLoading(true);

    await axios
      .get("https://dummyjson.com/auth/me", {headers:{
		'Authorization':`Bearer ${user?.accessToken}`
	  }})
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
	  setLoading(false)
  };
  useEffect(() => {
	getUserData()
  },[])
  return (
    
    <Layout title="Profile">
     {loading? <p>LOADING.......</p>: <div className="emily">
        <img src={profile?.image} alt="" />
        <p>
          NAME: {profile?.firstName} {profile?.lastName}
        </p>
        <p>EMAIL: {profile?.email}</p>
		<p>BIRTHDAY: {profile?.birthDate}</p>
      </div>}
    </Layout>
   
  );
};
export default Profile;

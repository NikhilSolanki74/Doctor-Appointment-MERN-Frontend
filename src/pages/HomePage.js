import React , {useEffect} from 'react'
import axios from "axios";

const HomePage = () => {
  const getUserData = async () => {
    try{
       const res = await axios.post("/api/v1/getUserData" , {},{
        headers:{
          Authorization:"Bearer " + localStorage.getItem("token")
        }
       })
    }catch(error){
       console.log(error);
    }
  }
useEffect(()=>{
  getUserData();
},[]);

  return (
    <div>
      <h1>this is our HomePage</h1>
    </div>
  )
}

export default HomePage

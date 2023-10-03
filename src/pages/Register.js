import React from 'react'
import { Form,Input,message } from 'antd'
import "../styles/RegisterStyles.css"
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios' // browser or nodejs which support ES6
// const axios = require('axios') for common nodejs
const Register = () => {
  const navigate = useNavigate();


  const onFinishHandler =async (values)=>{
     try{
      const res = await axios.post("/api/v1/register" , values);
      if(res.data.success){
        message.success("Register Successfully !");
        navigate("/login");
      }else{
        message.error(res.data.message);
      }
     }catch(error){
         console.log(error);
         message.error("something went wrong bro")
     } 
  }
  return (
    <>
        <div className='form-container'>
            <Form className='card p-5' layout="vertical" onFinish={onFinishHandler}>
            <h1>Register Form</h1>
                <Form.Item label="Name" name="name">
                    <Input type="text" required />
                </Form.Item>
                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required />
                </Form.Item>
                <Link to='/login' className='text-secondary mb-2'>ALREADY A USER </Link>
                <button className='btn btn-success' type='submit'>Register</button>
            </Form>
        </div>
    </>
  )
}

export default Register

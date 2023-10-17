import React from 'react'
import {Form , Input , message} from 'antd'
import "../styles/RegisterStyles.css"
import { useDispatch } from 'react-redux'
import { showLoading , hideLoading } from '../redux/features/alertSlice'
import { Link ,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch();
  const onFiniHandler = async (values)=>{
    try{
       dispatch(showLoading());
          const res = await axios.post('api/v1/login' , values );
          dispatch(hideLoading())
            if(res.data.success){
              localStorage.setItem("token" , res.data.token);
              message.success("Login to HomePage successfully")
              navigate('/')
            }
            else{
              message.error(res.data.message)
            }
    }catch(error){
      dispatch(hideLoading())
       console.log(error)
       message.error('something went wrong in login')
    }
  }
  return (
    <>
        <div className='form-container'>
            <Form className='card p-5' layout="vertical" onFinish={onFiniHandler}>
            <h1>Login Form</h1>
                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="password">
                    <Input type="password" required />
                </Form.Item>
                <Link to='/register' className='text-secondary mb-2'>Not A User Register Here </Link>
                <button className='btn btn-success' type='submit'>Login</button>
            </Form>
        </div>
    </>
  )
}

export default Login

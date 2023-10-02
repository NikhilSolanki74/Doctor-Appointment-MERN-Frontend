import React from 'react'
import {Form , Input} from 'antd'
import "../styles/RegisterStyles.css"


const Login = () => {
  const onFiniHandler = (values)=>{
    console.log(values)
  }
  return (
    <>
        <div className='form-container'>
            <Form className='card p-5' layout="vertical" onFinish={onFiniHandler}>
            <h1>Login Form</h1>
                <Form.Item label="Email" name="email">
                    <Input type="email" required />
                </Form.Item>
                <Form.Item label="Password" name="Password">
                    <Input type="password" required />
                </Form.Item>
                <button className='btn btn-success' type='submit'>Login</button>
            </Form>
        </div>
    </>
  )
}

export default Login

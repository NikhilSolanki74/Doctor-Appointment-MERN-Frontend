import React from 'react'
import { Form,Input } from 'antd'
import "../styles/RegisterStyles.css"
import { Link } from 'react-router-dom'
const Register = () => {
  const onFinishHandler = (values)=>{
    console.log(values)
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
                <Form.Item label="Password" name="Password">
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

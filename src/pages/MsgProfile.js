import React from 'react'
import Layout from "../components/Layout";

const MsgProfile = () => {
  return (
    <Layout>
      <h1 className='mx-3 bg-warning'>Sample Doctor Id For Authorization Testing </h1>
      <p className="mx-5" >Email : <p className="bg-success text-white">doctor@gmail.com</p></p>
      <br/>
      <p className="mx-5" >Password : <p className="bg-danger text-white">nikhil</p></p>
    </Layout>
  )
}

export default MsgProfile

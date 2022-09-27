import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate=useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
// if success if truw storing the auth token in the local storage
localStorage.setItem('token', json.authtoken);
props.showAlert("Logged In Successfully !","success")
      navigate("/")
      // redirect
    }
    else {
      props.showAlert("Invalid Credentials","danger")
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h1 className='text-center mb-4'>🙏🏻Welcome🙏🏻</h1>
      <h5 className='text-center mb-4'>Login-Here</h5>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" onChange={onChange} name='email' className="form-control" value={credentials.email} id="email" aria-describedby="emailHelp" placeholder="Enter email"  minLength={3} required/>

        </div>
        {/* password */}
        <div className="form-group my-3">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={onChange} id="password" name='password' value={credentials.password} className="form-control" placeholder="Password"   required/>
        </div>

        <button type="submit" className="btn btn-success mt-2 mx-2" >Submit</button>
      </form>
    </div>
  )
}

export default Login

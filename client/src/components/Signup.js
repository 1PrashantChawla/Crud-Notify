import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {

const [credentials,setCredentials]=useState({name:'',email:'',password:'',Cpassword:''})
 let navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
   const {name,email,password}=credentials;
    
    const response = await fetch(`http://localhost:8000/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name,email,password})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
// if success if truw storing the auth token in the local storage
        props.showAlert("Account Created Successfully !","success")
      localStorage.setItem('token', json.authtoken);
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
       
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <h1 className='text-center mb-4'>🙏🏻Welcome🙏🏻</h1>
      <h5 className='text-center mb-4'>Signup-Here</h5>
        {/* name */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="name" onChange={onChange} name='name' className="form-control" value={credentials.name} id="name" aria-describedby="emailHelp" placeholder="Enter Name"  minLength={3} required />

        </div>
          {/* email */}
        <div className="form-group my-2">
          <label htmlFor="email">Email address</label>
          <input type="email" onChange={onChange} name='email' className="form-control" value={credentials.email} id="email" aria-describedby="emailHelp"  minLength={3} placeholder="Enter email" required/>

        </div>
        {/* password */}
        <div className="form-group my-2">
          <label htmlFor="password">Password</label>
          <input type="password" onChange={onChange} id="password" name='password' value={credentials.password} className="form-control" placeholder="Password" minLength={5} required/>
        </div>
        {/* confirm password */}
        <div className="form-group my-2">
          <label htmlFor="Cpassword">Confirm Password</label>
          <input type="password" onChange={onChange} id="password" name='Cpassword' value={credentials.Cpassword} className="form-control" placeholder="Confirm Password"  minLength={3} required/>
        </div>

        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  )
}

export default Signup

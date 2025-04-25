import React from 'react';
import { Link } from 'react-router-dom';
const Landing=()=>{
    return (
        <div className='container text-center mt-5'>
          <h1>Welcome to QuickChat</h1>
          
          <p>It's a real-time chat application that allows users to communicate instantly.</p>
          <p>Please Login or Register to Continue</p>
          <div className='d-flex justify-content-center'>
            <Link to="/login" className="btn btn-primary m-2">
            LOG IN</Link>
            <Link to="/Register" className="btn btn-danger m-2">
               REGISTER
            </Link>
          </div>
        </div>
    )
}
export default Landing;
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

const Login = () => {
    const [email,SetEmail]=useState('');
    const [password,SetPassword]=useState('');
    const navigate=useNavigate();
   
    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            console.log('email:',email);
            console.log('password:',password);
            const res=await axios.post('/auth/login',{email,password});
            console.log('Response:',res.data);
            localStorage.setItem('token',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user));
            alert('Login Successful');
            navigate('/home');
            
        }
        catch(err){
            alert(err.response?.data?.msg||"Login Failed");
    }
}
return(
    <div className='container mt-5'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <input type='email'
            className='form-control mt-2'
            placeholder='email'
            value={email}
            onChange={(e)=>SetEmail(e.target.value)}
            required/>


<input type='password'
            className='form-control mt-2'
            placeholder='password'
            value={password}
            onChange={(e)=>SetPassword(e.target.value)}
            required/>

            <button type='submit' className='btn btn-success'>
                Login
            </button>
            <p>Don't Have an account  <a href='/register'>
            RegisterHere</a></p>
        </form>
    </div>
)
}
export default Login;
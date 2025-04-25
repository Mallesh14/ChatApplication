import React,{useState} from "react";
import axios from '../axios';
import {useNavigate} from 'react-router-dom';

const Register=()=>{
    const[name,SetName]=useState("");
    const [email,SetEmail]=useState("");
    const [password,SetPassword]=useState("");

    const navigate=useNavigate();
    const handleRegister=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("/auth/register",{name,email,password});
            alert(res.data.msg);
            navigate("/login");
        }
        catch(err){
            console.log(err);
            alert(err.response?.data?.msg||"Registration Failed",err);
        }
    }

    return(
        <div className="container mt-5">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
              <input type="text" 
                className="form-control mb-2"
                 placeholder="name"
                value={name}
                onChange={(e)=>SetName(e.target.value)}
                required/>

            <input type="email" 
                className="form-control mb-2"
                 placeholder="email"
                value={email}
                onChange={(e)=>SetEmail(e.target.value)}
                required/>

            <input type="password" 
                className="form-control mb-2"
                 placeholder="password"
                value={password}
                onChange={(e)=>SetPassword(e.target.value)}
                required/>

                <button type="submit" className="btn btn-success">
                    Register
                </button>
            </form>
        </div>
    )
}
export default Register;
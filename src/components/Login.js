import React, {useEffect, useState} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie'; 
import {useNavigate} from 'react-router-dom';
import {ImWarning} from 'react-icons/im'
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import '../Styles/AppStyles.css';
import Navbar from '../containers/Navbar';



function Login() {
    const [showInvalid, setShowInvalid] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    const navigate = useNavigate()
    
    
    useEffect(() => {
        if(token['mytoken']){
            navigate('/articles')
        }
    }, [token])

    const loginBtn = () => {
        APIService.LoginUser({username, password})
        .then(resp=>{
            resp && setToken('mytoken', resp.token) && setShowInvalid(false)
        })
        .catch(err=>{
            setShowInvalid(true)
        })
    }

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
        .then(resp=>{
            loginBtn()
        })
        .catch(err=>{
            navigate('*')
        })
    }


  return (
    <>
    <Navbar/>
    <div className='App'>
        <br/>
        <br/>
        {isLogin ? <h1>LOG IN</h1>:<h1>SIGN UP</h1>}
        
        <div>
    </div>
        {
            showInvalid && <p style={{ color: "red" }}>Invalid Username or Password  <ImWarning/></p>
        }
        <div className='mb-3'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type="text" className='form-control' id="username" placeholder="Enter your username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type="password" className='form-control' id="password" placeholder="Enter your password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        {isLogin?<button onClick={loginBtn} className='btn btn-primary'>Login</button>:<button onClick={registerBtn} className='btn btn-primary'>Register</button>}
        
        <div className='mb-3'>
            <br/>
            {isLogin ? <h5>If You Don't Have Account, Please <button className='btn btn-primary' onClick={()=>setIsLogin(false)}>Register</button> Here</h5>
            : <h5>If You Have Accout, Please <button className='btn btn-primary' onClick={()=>setIsLogin(true)}>Login</button></h5>
        }
        </div>
    </div>
    </>
    
  )
}

export default Login;
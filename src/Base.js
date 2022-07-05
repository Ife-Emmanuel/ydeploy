import React, {useEffect} from 'react'
import {Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom';
import Navbar from './containers/Navbar';
import App from './App';
import About from './components/About';
import Members from './components/Members';
import Admin from './components/Admin';
import InsertForm from './components/InsertForm';
import {useCookies} from 'react-cookie';

function Base() {
    const [token, setToken, removeToken] = useCookies(['myToken'])
    const [admintoken, setAdminToken, removeAdminToken] = useCookies(['adminToken'])
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token['mytoken']){
            if(admintoken['adminToken']){
                // navigate('/Admin')
            }
            else{
                navigate('/');
                // window.location.href = "/"
            }
            
        } else {
            if(token['mytoken']){
                if(admintoken['adminToken']){
                    // navigate('/Admin')
                }
                else{
                    navigate('/articles')
                }
            }
        }
    }, [token])


    function BaseRouter(){
        return(
            <BrowserRouter>
                <Navbar/>
                <Routes>
                <Route exact path="/articles" element={<App/>}/>
                    <Route exact path="/About" element={<About/>}/>
                    <Route exact path="/Members" element={<Members/>}/>
                    <Route exact path="/Admin" element={<Admin/>}/>
                    <Route exact path="/articles/InsertForm" element={<InsertForm/>}/>
                </Routes>
            </BrowserRouter>
        )
        

    }
  return (
    <BaseRouter/>
  )
}

export default Base
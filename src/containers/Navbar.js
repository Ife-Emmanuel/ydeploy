import React, { useState, useEffect } from 'react'
import Icon from '../components/icons';
import '../components/navbar/styles/Navbar.css'
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import {FaHome, FaSignOutAlt, FaBars} from 'react-icons/fa'
import {SiXdadevelopers} from 'react-icons/si'
import {TiGroup} from 'react-icons/ti'
import {MdPostAdd} from 'react-icons/md'

export function Navbar() {
    const [token, setToken, removeToken] = useCookies(['myToken'])
    const [admintoken, setAdminToken, removeAdminToken] = useCookies(['adminToken'])

    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false)

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
    

    const handleClick = () => {
        setClicked(!clicked)
    }

    const createInsertForm = () => {
        // setInsertForm(true);
        navigate("/articles/InsertForm")
    }

    const getMembers = ()=>{
        navigate("/Members");
        }

    const logOutBtn = () => {
        removeToken(['mytoken'])
        navigate('/')
      }

    const createAdminToken = () => {
        setAdminToken('adminToken', true)
    }

  return (
    <div>
        <nav className='NavbarItems'>
        <Icon.BrandProvider href="/"><p style={{fontSize:26}}>YBlog</p></Icon.BrandProvider>
        {
            token['mytoken'] && 
            <>
                <Icon.Provider href="/"><Icon.icon><FaHome/></Icon.icon>Home</Icon.Provider>
                <Icon.Provider onClick={createInsertForm}><Icon.icon><MdPostAdd/></Icon.icon>Post</Icon.Provider>
            </>
        }
        
        {
            !token['mytoken'] && 
                <div className='admin-show'>
                    <Icon.Provider href="/Admin-site" onClick={createAdminToken}><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider>
                </div>
        }
        
        {
            token['mytoken'] && 
            <>
                <div className='nav-show'>
                <Icon.Provider href="/Admin-site" onClick={createAdminToken}><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider>
                </div>
                <div className='nav-show'>
                    <Icon.Provider onClick={getMembers}><Icon.icon><TiGroup/></Icon.icon>Members</Icon.Provider>
                </div>
                <div className='nav-show'>
                    <Icon.Provider onClick={logOutBtn}><Icon.icon><FaSignOutAlt/></Icon.icon>SignOut</Icon.Provider>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <FaBars color='white'/>
                </div>
            </>
        }
        
        <div>
        {
            token['mytoken'] && 
            <>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}> 
              
                        <li>
                            <Icon.Link href="/Admin-site" onClick={createAdminToken}><Icon.Row><SiXdadevelopers/>Administrator</Icon.Row></Icon.Link>
                            {/* <Icon.Provider ><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider> */}
                        </li>
                        <li>
                        <Icon.Link href="/Members"><Icon.Row><TiGroup/>Members</Icon.Row></Icon.Link>
                            {/* <Icon.Provider onClick={getMembers}><Icon.icon><TiGroup/></Icon.icon>Members</Icon.Provider> */}
                        </li>
                        <li>
                        <Icon.Link onClick={logOutBtn}><Icon.Row><FaSignOutAlt/>SignOut</Icon.Row></Icon.Link>
                            {/* <Icon.Provider onClick={logOutBtn}><Icon.icon><FaSignOutAlt/></Icon.icon>SignOut</Icon.Provider> */}
                        </li>
                 
                        

                </ul>
            </>
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
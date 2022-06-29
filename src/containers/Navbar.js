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
    const [token, setToken, removeToken] = useCookies(['mytoken'])
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
                <Icon.Provider onClick={createInsertForm}><Icon.icon><MdPostAdd/></Icon.icon>New Article</Icon.Provider>
            </>
        }
        
        {
            !token['mytoken'] && 
                <div className='admin-show'>
                    <Icon.Provider href="/Admin" onClick={createAdminToken}><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider>
                </div>
        }
        
        {
            token['mytoken'] && 
            <>
                <div className='nav-show'>
                <Icon.Provider href="/Admin" onClick={createAdminToken}><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider>
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
                            <Icon.Provider href="/Admin" onClick={createAdminToken}><Icon.icon><SiXdadevelopers/></Icon.icon>Administrator</Icon.Provider>
                        </li>
                        <li>
                            <Icon.Provider onClick={getMembers}><Icon.icon><TiGroup/></Icon.icon>Members</Icon.Provider>
                        </li>
                        <li>
                            <Icon.Provider onClick={logOutBtn}><Icon.icon><FaSignOutAlt/></Icon.icon>SignOut</Icon.Provider>
                        </li>
                 
                        

                </ul>
            </>
        }
        </div>
      </nav>
    </div>
  )
}

export default Navbar




// export class Navbar extends Component {
//     state = {
//         clicked: false
//     }

//     handleClick = () => {
//         this.setState({clicked: !this.state.clicked})
//     }

//   render() {
//     return (
//       <nav className='NavbarItems'>
//         <h1 className='navbar-logo'>React<i className='fab fa-react '></i></h1>
//         <div className='menu-icon' onClick={this.handleClick}>
//             <i className='fas fa-bars'></i>

//         </div>
//         <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//             {MenuItems.map((item, index)=>{
//                 return (
//                     <li key={index}>
//                         <a className={item.cName} href={item.url}>
//                             {item.title}
//                         </a>
//                     </li>
//                 )
//             })}
           
//         </ul>
//         <Button>Sign Up</Button>
//       </nav>
//     )
//   }
// }

// export default Navbar;

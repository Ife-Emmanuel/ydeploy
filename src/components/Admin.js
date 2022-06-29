import React, {useState, useEffect} from 'react';
import APIService from '../APIService';
import {CgProfile} from 'react-icons/cg';
import '../Styles/AdministratorStyles.css'
import '../Styles/AppStyles.css'
import Footer from './footer';
import Icon from './icons';
import {MdOutlineMail} from 'react-icons/md'
import {useCookies} from 'react-cookie'; 
import { useNavigate } from 'react-router-dom';

function Admin() {

    const profilePhoto = require('./images/profile.jpg')
    const [admintoken, setAdminToken, removeAdminToken] = useCookies(['adminToken'])
    const navigate = useNavigate()

    const leavePage = () => {
        removeAdminToken(['adminToken'])
        navigate('/')     
    }

  return (
    <div className='App'>
        <div className='top'>
            <div className='left'>
                <h2>YBlog Administrator</h2>
            </div>
            <div className='right'>
                <button className='btn btn-danger' onClick={leavePage}>Leave Page</button>
            </div>
            
        </div>
        <div className="two-column-wrapper">
            <div className="profile-image-wrapper">
                {/* <img src={profilePhoto}/> */}
            </div>

            <div className="profile-content-wrapper">
                <h1>Hi, thanks for visiting this site.</h1>

                <p>
                    With more than two years of development experience with a number of projects, I realized that the typical product creation process
                between clients and developers was flaem. All 100 developers rarely communicate to clients through the development stage resulting in a final
                product that fails to reach the goal sought by the customer and end user.
                </p>
                <p>
                    For this reason, I decided to utilize a completely different development pattern that focuses on highly communication and transparent design
                    patterns. When I take on a project, not only do I work to craft the application according to the client's specifications, I give daily updates
                    to ensure that the project is aligned properly with the client's goals. The end result is the right product delivered on time and on budget.
                </p>

                <p>Contact</p>
                <p><MdOutlineMail/> emmanuelifeoluwa369@gmail.com</p>
                <Footer.Link href="https://www.linkedin.com/in/ifeoluwa-babalola-9a612a18a/" target="_blank"><Icon.LinkedIn/>   LinkedIn</Footer.Link>

            </div>
      </div>
    </div>
  )
}

export default Admin;
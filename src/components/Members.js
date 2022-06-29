import React, {useEffect, useState} from 'react'
import {CgProfile} from 'react-icons/cg'
import '../App.css';
import APIService from '../APIService';
import '../Styles/AppStyles.css'


function Members(props) {
    const [users, setUsers] = useState(props.users)

    useEffect(()=>{
        APIService.ListUsers()
        .then(resp => {
            resp && setUsers(resp)})
        .catch(err=>{})
    }, [])

  return (
      <div className='App'>
        <div>
            <h2>YBlog Members</h2>
        </div>

        <br/>
        {
            users &&
            users.map(user=>{
                return(
                    <div key={user.id}>
                        <div>
                            <CgProfile/>
                            <p>  {user.username}</p>
                        </div>
                        <div>
                            <p>Contact</p>
                            <p>{user.email}</p>
                            {/* {console.log(user.email)} */}
                        </div>
                        <hr className='hrclass'/>
                    </div>
                )
            })
        }
      
      </div>
  )
}

export default Members;
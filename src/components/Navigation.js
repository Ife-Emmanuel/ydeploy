import React from 'react'
import { useNavigate, NavLink} from 'react-router-dom';
import {useCookies} from 'react-cookie';


function Navigation(props) {
    const [token, setToken, removeToken] = useCookies(['mytoken'])
    const navigate = useNavigate()

    const createInsertForm = () => {
        // setInsertForm(true);
        navigate("/articles/InsertForm", {insertedInformation : props.insertedInformation})
    }

    const logOutBtn = () => {
        removeToken(['mytoken'])
      }

    const navAbout = () => {
        navigate("/About")
    }

  return (
      <div className='App-nav'>
          <br/>
        <div className="row">
                <div className="col">
                    <h1>Yblog</h1>
                    <br/>
                </div>
                <div className="col">
                    {/* <button className="btn btn-primary" onClick={createInsertForm}>Insert Article</button> */}
                    <NavLink to="/">HOME</NavLink>
                </div>  
                <div className="col">
                    <NavLink>ABOUT</NavLink>
                </div>  
                <div className="col">
                    <button className="btn btn-primary" onClick={logOutBtn}>Logout</button>
                </div>  
            </div>
      </div>
  
  )
}

export default Navigation
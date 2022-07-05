import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../containers/Navbar';

function InsertForm(props) {

    const [title, setTitle] = useState('')
    const [errmessage, seterrmessage] = useState(false)
    const [description, setDescription] = useState('')
    const [insertClicked, setInsertClicked] = useState(false)
    const [token, setToken] = useCookies('mytoken')
    const navigate = useNavigate()
    

    const insertArticle = () => {
      // check to see if either title or description field is empty
        if (!title || !description){
          navigate("/articles/InsertForm")
          seterrmessage(true);}
        else{
        APIService.InsertArticle({title, description}, token['mytoken'])
        .then(resp=>{})
        .catch(err=>{console.log(err)})
        setInsertClicked(true)
        // .then(resp=>props.insertedInformation(resp))
      }
        
    }

    useEffect(() => {
          if(insertClicked){
            navigate('/articles/')
        }
        setInsertClicked(false)
    }, [insertClicked])
    

  return (
    <>
    <Navbar/>
    <div className='mb-3 App'>
            <br/>
            <h1>Add a new Article</h1>
            <br/>
            {errmessage && <p style={{color:"red"}}>You need to enter both fields "title and description"</p>}
            <br/>
            <label htmlFor='title' className="form-label">Title</label>
            <input type="text" className="form-control" id="title" placeholder= "Please enter the title" value={title} onChange={e=>setTitle(e.target.value)}/>
            <br/>
            <label htmlFor='description' className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="10" placeholder= "Enter the description" value={description} onChange={e=>setDescription(e.target.value)}/>
            <br/>

            <button className="btn btn-success" onClick={insertArticle}>Insert Article</button>
            
            

        </div>
    </>
    
  )
}

export default InsertForm
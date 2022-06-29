import React, {useState, useEffect} from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import Icon from './icons'

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token, setToken] = useCookies('mytoken')

    useEffect(()=>{
        setTitle(props.article.title);
        setDescription(props.article.description);
    }, [props.article])
    
    
    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description}, token['mytoken'])
        .then(resp => {props.updatedInformation(resp)})
        .catch(err=>{})
    }

  return (
    <div>
        <div className='mb-3'>
            <div className='form-wrapper'>
                <div className="top-left">
                    <label htmlFor='title' className="form-label">Title</label>
                </div>
                <div className='top-right'>
                    <button onClick={props.setEditNull}><Icon.WindowClose/></button>
                </div>
                
            </div>
            <input type="text" className="form-control" id="title" placeholder= "Please enter the title" value={title} onChange={e=>setTitle(e.target.value)}/>
            <br/>
            <label htmlFor='description' className="form-label">Description</label>
            <textarea className="form-control" id="description" rows="5" placeholder= "Enter the description" value={description} onChange={e=>setDescription(e.target.value)}/>
            <br/>

            {
                props.article.id ?
                <button className="btn btn-success" onClick={updateArticle}>Update Article</button>
                : null
            }
            

        </div>
    </div>
  )
}

export default Form;
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import APIService from '../APIService'
import Form from './Form'
import { useCookies } from 'react-cookie'
import '../Styles/AppStyles.css'
import Icon from './icons'
import {useNavigate} from 'react-router-dom';

function ArticlesList(props) {
    const navigate = useNavigate()
    const [token] = useCookies('mytoken')

    const editBtn = (article) => {
        props.editBtn(article)
    }

    const deleteBtn = (article, token) => {
        APIService.DeleteArticle(article.id, token['mytoken'])
        .then(resp => {
          if (resp.status >= 200 && resp.status <= 299) {
            props.deleteBtn(article)
          } else {throw Error(resp.statusText);}
         })
         .catch(err=>{navigate("*")})
    }

  return (
    <>
    {props.articles && props.articles.map(article => {
      return (
       <div  key={article.id}>
            <div className='container'>
                <div className='top'>
                    <div className="left">
                          <div>
                              <h2>{article.title}</h2>
                          </div>
                         
                    </div>
              
                    <div className='right'>
                      {/* Delete Icon */}
                        <button className='btn btn-danger' onClick={()=>deleteBtn(article, token)}>Delete <Icon.Trash/></button>
                       
                    </div>

                </div>
            
            
                <div className='bottom'>
                      
                      <div>
                          <p>{article.description}</p>
                      </div>    

                      <div className='col-md-1'>
                            {
                                  !props.editArticle && <button className='btn btn-primary' onClick={() => editBtn(article)}>Update</button>
                              }
                      </div>    

                      {props.editArticle && article.id === props.editArticle.id 
                              ? <Form article={article} editArticle={props.editArticle} updatedInformation={props.updatedInformation} setEditNull={props.setEditNull}/> : null}

                </div>
            

            
        
            </div>
            {/* horizontal line after each article */}
            <hr className='hrclass'/>
            <hr className='hrclass'/>
            
            

       </div>
       
      )
    })}
      </>
  )
}

export default ArticlesList;


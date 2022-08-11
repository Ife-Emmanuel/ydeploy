import './App.css';
import React, {useState, useEffect, useContext} from 'react';
// import NewArticleList from './components/NewArticleList';
import ArticlesList from './components/ArticlesList';
// import Navigation from './components/Navigation';
// import {Link} from 'react-router-dom';
// import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import {useCookies} from 'react-cookie';
import {useNavigate} from 'react-router-dom';
import {checkError} from './APIService';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import Navbar from './containers/Navbar';



function App(){

  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)
  const [inSertForm, setInsertForm] = useState(false)
  const [token] = useCookies(['mytoken'])
  const navigate = useNavigate();
  const {REACT_APP_ADMINTOKEN, REACT_APP_ARTICLE_LIST, REACT_APP_API_AUTH_END, REACT_APP_API_USERS_END} = process.env;

  useEffect(()=>{
    fetch(REACT_APP_ARTICLE_LIST, {
      'method' : 'GET',
      headers : {
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${token['mytoken']}`,
      }
    })
    .then(checkError)
    .then(resp => setArticles(resp.reverse()))
    .catch(error => {navigate("*")})
  }, [])

  useEffect(() => {
    if(!token['mytoken']){
        navigate('/');
        // window.location.href = "/"
    }
}, [token])

  const editBtn = (article)=>{
      setEditArticle(article)
  }

  const setEditNull = () => setEditArticle(null)

  const updatedInformation = (editedArticle) => {
    const newArticles = articles.map(article=>
      article.id === editedArticle.id ? editedArticle : article
    )
    setArticles(newArticles);
    setEditNull();
  }

  const insertedInformation = (newArticle) => {
    const newArticles = [...articles, newArticle]
    setArticles(newArticles)
    setEditNull()
  }

  
  const deleteBtn = (article) => {
      const new_articles = articles.filter(myArticle =>
        myArticle.id === article.id ? false : true)
        setArticles(new_articles)

  }

  

  return (
    <>
    <Navbar/>
    <div className="App">
      <br/>
      <ArticlesList articles={articles} editArticle={editArticle} editBtn={editBtn} deleteBtn={deleteBtn} updatedInformation={updatedInformation} setEditNull={setEditNull}/>

    </div> 
    </>
    
  )
}

export default App;

  {/* {
        editArticle ? <Form article={editArticle} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/>: null
      } */}
      {/* <NewArticleList articles={articles} editBtn={editBtn} editArticle={editArticle} updatedInformation={updatedInformation}/> */}


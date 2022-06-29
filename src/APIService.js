import React, { Component } from 'react'


const {REACT_APP_ADMINTOKEN ,REACT_APP_ARTICLE_LIST, REACT_APP_API_AUTH_END, REACT_APP_API_USERS_END} = process.env;

export function checkError(response) {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  }

export default class APIService extends Component {
   
    static UpdateArticle(article_id, body, token){

        return fetch(`${REACT_APP_ARTICLE_LIST}${article_id}/`, {
            'method' : 'PUT',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`,
              },
              body: JSON.stringify(body)
        }).then(checkError)
    }

    // `${REACT_APP_ARTICLE_LIST}`
    static InsertArticle(body, token){
        return fetch(`${REACT_APP_ARTICLE_LIST}`, {
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`,
              },
              body: JSON.stringify(body)  
        }).then(checkError)
    }

    static DeleteArticle(article_id, token){
        return fetch(`${REACT_APP_ARTICLE_LIST}${article_id}/`, {
            'method' : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`,
              }
              
        })
    }

    static LoginUser(body){
        return fetch(`${REACT_APP_API_AUTH_END}`, {
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
              },
            body: JSON.stringify(body)  
        })
        .then(checkError)
        
    }

    static RegisterUser(body){
        return fetch(`${REACT_APP_API_USERS_END}`, {
            'method' : 'POST',
            headers : {
                'Content-Type' : 'application/json',
              },
            body: JSON.stringify(body)  
        }).then(checkError)
    }

    static ListUsers(){
        return fetch(REACT_APP_API_USERS_END, {
            'method' : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${REACT_APP_ADMINTOKEN}`,
              },
        }).then(checkError)
    }

}



// export default APIService










// import React, { Component } from 'react'

// export class APIService extends Component {
//     static UpdateArticle(action){
//         switch(action.type){
//             case 'innerForm':
//                 return fetch(`http://localhost:8000/api/articles/${action.newId}/`, {
//                 'method' : 'PUT',
//                 'headers' : {
//                     'Content-Type' : 'application/json',
//                     'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3',
//                 },
//                 'body' : JSON.stringify(action.body)
//             }).then(resp => resp.json())

//             case 'outerForm':
//                 return fetch('http://localhost:8000/api/articles/', {
//                     'method' : 'POST',
//                     'headers' : {
//                         'Content-Type' : 'application/json',
//                         'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3',
//                     },
//                     'body' : JSON.stringify(action.body)
//                 }).then(resp => resp.json())
//         }
        
//     }



//     static PostArticle(body){
//         return fetch('http://localhost:8000/api/articles/', {
//             'method' : 'POST',
//             headers : {
//                 'Content-Type' : 'application/json',
//                 'Authorization' : 'Token 2f0edc6643c40aa81b2f4554adc0a0b708582dd3'
//             },
//             body : JSON.stringify(body)
//         })
//     }


//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// export default APIService;
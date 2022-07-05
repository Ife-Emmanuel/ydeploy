// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom';
// import Login from './components/Login';
// import { CookiesProvider } from 'react-cookie';
// import Base from './Base';
// import ErrorPage from './components/ErrorPage';
// import {useCookies} from 'react-cookie';
// import Navbar from './containers/Navbar';
// import { GlobalStyles } from './global-styles';
// import {FooterContainer} from './containers/footer';
// import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Kommunicate.init("2b139c35711bb45dd5840741a348c00cd", {"popupWidget":true,"automaticChatOpenOnNavigation":true})

// function Router(){  

//   return(

//           <CookiesProvider>
//             <BrowserRouter>
//                 <Base/>
//                 <Routes>
//                   <Route exact path="/" element={<Login/>}/>
//                   <Route path="*" element={<ErrorPage/>}/>
//                 </Routes>
//                 <FooterContainer/>  
//               </BrowserRouter> 
//           </CookiesProvider>
//   )

// }



// ReactDOM.render(
//   // <React.StrictMode>
//     <>
//       <GlobalStyles/>
//       <Router/>   
//     </>
  
// //  </React.StrictMode>,
//   ,document.getElementById('root')
// );

// reportWebVitals();





import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, BrowserRouter, NavLink} from 'react-router-dom';
import Login from './components/Login';
import Members from './components/Members';
import { CookiesProvider } from 'react-cookie';
import InsertForm from './components/InsertForm';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import {useCookies} from 'react-cookie';
import Admin from './components/Admin';
import Navbar from './containers/Navbar';
import { GlobalStyles } from './global-styles';
import {FooterContainer} from './containers/footer';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

Kommunicate.init("2b139c35711bb45dd5840741a348c00cd", {"popupWidget":true,"automaticChatOpenOnNavigation":true})

function Router(){  

  return(

          <CookiesProvider>
            <BrowserRouter>
                {/* <Navbar/> */}
                <Routes>
                  <Route exact path="/" element={<Login/>}/>
                  <Route exact path="/articles" element={<App/>}/>
                  <Route exact path="/About" element={<About/>}/>
                  <Route exact path="/Members" element={<Members/>}/>
                  <Route exact path="/Admin" element={<Admin/>}/>
                  <Route exact path="/articles/InsertForm" element={<InsertForm/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
                </Routes>
                
                <FooterContainer/>  
              </BrowserRouter> 
          </CookiesProvider>
  )

}



ReactDOM.render(
  // <React.StrictMode>
    <>
      <GlobalStyles/>
      <Router/>   
    </>
  
//  </React.StrictMode>,
  ,document.getElementById('root')
);

reportWebVitals();
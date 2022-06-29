import React, { useEffect } from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Icon from './icons';
import {FaHome, FaSignOutAlt} from 'react-icons/fa'
import {SiXdadevelopers} from 'react-icons/si'
import {TiGroup} from 'react-icons/ti'
import {MdPostAdd} from 'react-icons/md'

function NavbarComp() {

    const [token, setToken, removeToken] = useCookies(['mytoken'])
    const navigate = useNavigate()

    useEffect(()=>{
        if(!token['mytoken']){
            navigate('/');
            // window.location.href = "/"
        }
    }, [token])

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

  return (
    
        <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container fluid>
            
            <Navbar.Brand href="/">YBlog</Navbar.Brand>
                {
                    token['mytoken'] && 
                    <>
                    <Icon.Provider href="/"><FaHome/>Home</Icon.Provider>
                    <Icon.Provider onClick={createInsertForm}><MdPostAdd/>New Article</Icon.Provider>
                    <Icon.Provider href="/Admin"><SiXdadevelopers/>Administrator</Icon.Provider>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    
                    {/* <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
    
                    
                    <Icon.Provider onClick={getMembers}><TiGroup/>Members</Icon.Provider>
                    <Icon.Provider onClick={logOutBtn}><FaSignOutAlt/>SignOut</Icon.Provider>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >   
                    
                        {/* <NavDropdown title="More" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3"> 
                                
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                            
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                    </>

                }

                
                </Container>
        </Navbar>
  )
}

export default NavbarComp;
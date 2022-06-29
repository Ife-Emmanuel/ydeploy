import React from 'react'
import Footer from '../components/footer'
import Icon from '../components/icons'
import { useNavigate } from 'react-router-dom'


export function FooterContainer() {
    const navigate = useNavigate();

    const adminNav = ()=>{
        navigate("/Admin");
    }

    const aboutNav = ()=>{
        navigate("/About")
    }

    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Brand>
                <Footer.Title>YBlog</Footer.Title>
            </Footer.Brand>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link onClick={aboutNav}>About</Footer.Link>
                    <Footer.Link onClick={e => e.preventDefault()}>Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link onClick={e => e.preventDefault()}>Development</Footer.Link>
                    <Footer.Link onClick={adminNav}>Administrator</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link onClick={e => e.preventDefault()}>United States</Footer.Link>
                    <Footer.Link onClick={e => e.preventDefault()}>Nigeria</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.linkedin.com/in/ifeoluwa-babalola-9a612a18a/" target="_blank"><Icon.LinkedIn/>   LinkedIn</Footer.Link>
                    <Footer.Link href="https://www.facebook.com/johnserio11111/" target="_blank"><Icon.Facebook/>  Facebook</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Copywright>
                <Footer.Text>&copy; YBlog, 2022. All rights reserved.</Footer.Text>
            </Footer.Copywright>
            </Footer.Wrapper>
        </Footer>
    )
}
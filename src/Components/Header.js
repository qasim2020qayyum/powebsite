import React from 'react'
import Typical from 'react-typical';
import {Container } from "react-bootstrap";

const Header = () => {
    return (
        <>
            <Container fluid className='image' >
        <h1 className='heading'>I am Qasim Qayyum</h1>
        <p className='Heading__para' style={{color: '#fff'}}>
            <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
                'WebSite Developer', 4000,
                'Reactjs Developer', 4000,
                'WebSite Designer',  4000,
                'AWS Solution Architect',  4000
            ]}/>
        </p>
    </Container>
        </>
    )
}

export default Header

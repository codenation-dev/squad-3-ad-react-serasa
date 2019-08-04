import React from 'react';
import { Link } from 'react-router-dom';
import styled               from 'styled-components'


const Header = props => (
    <header>
        <div className="wrap-header">
            <Nav position="left">
                <SLink>
                    <Link to="/">Home</Link>
                </SLink>
                <SLink>
                    <Link to="/repos">Repositórios</Link>
                </SLink>
                
            </Nav>
        </div>
    </header>
)


const Nav = styled.nav`
    
    display:flex;
    align-self: flex-end;
    
    
`
const SLink = styled.div`
    
    padding:20px 15px;
    /*background: rgba(0,0,0, .15);*/
    text-decoration:none;
    
    & > a{
        padding: 20px 0;
        color: white;
        font-weight:bold
        
    }
    
    & > a:hover {
        color: hsla(0,0%,100%,.7);
    }
`



export default Header;

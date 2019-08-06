import React    from 'react';
import { Link } from 'react-router-dom';
import styled   from 'styled-components'
import logo     from './../assets/images/squad3-logo.png'


const Header = props => (
    <header>
        <div className="wrap-header">
            <Logo>
                <img alt="logo" height="83px" width="60px" src={logo} />
            </Logo>
            <Nav position="left">
                <SLink>
                    <Link to="/">Home</Link>
                </SLink>
                <SLink>
                    <Link to="/user/repos">Criar Repositórios</Link>
                </SLink>
                <SLink>
                    <Link to="/repos">Procurar Repositórios do Git</Link>
                </SLink>
                
            </Nav>
        </div>
    </header>
)

const Logo = styled.div``


const Nav = styled.nav`
    
    display:flex;
    align-self: flex-end;
    flex: 1;
    justify-content: flex-end;
    
    
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

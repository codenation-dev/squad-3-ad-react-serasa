import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => (
    <header>
        <div className="wrap-header">
            <Link to="/repos">Repositórios</Link>
        </div>
    </header>
)

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import { slide as Menu } from 'react-burger-menu';
import paws from '../../images/paws-logo.png';
import './HamburgerNav.css';

function HamburgerNav(props) {
    return (
        <>
            <Link to='/' className='nav-title'><img className='icon' src={paws} alt='paws-logo'></img><span className='title'>PawUp</span></Link>
            <>
                {/*Line 15-22 checks if the user is logged in */}
                {TokenService.hasAuthToken() ?
                    <LoggedInNav handleLogout={props.handleLogout} />
                    :
                    <Menu>
                        <Link to='/login' className="menu-item">Log In</Link><br />
                        <Link to='/signup' className="menu-item">Sign Up</Link>
                    </Menu>
                }
            </>
        </>
    );
}

export default HamburgerNav;

import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './AddPostNav.css';
import paws from '../../images/paws-logo.png';

function AddPostNav(props) {
    return (
        <>
            <Link to='/' className='nav-title'><img className='icon' src={paws} alt='paws-up-logo'></img>{' '}<span className='title'>PawUp</span></Link>
            <>
                <Menu right>
                    <Link to='/posts' className='menu-item'>Posts</Link><br />
                    <Link to='/myPosts' className="menu-item">My Post</Link><br />
                    <Link to='/profile' className="menu-item">Profile</Link><br />
                    <Link to='/posts' className="menu-item" onClick={props.handleLogout}>Log out</Link>
                </Menu>
            </>
        </>
    )
}

export default AddPostNav;

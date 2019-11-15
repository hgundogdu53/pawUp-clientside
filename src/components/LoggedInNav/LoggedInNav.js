import React from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';

function LoggedInNav(props) {
    return (
        <Menu>
            <Link to='/posts' className="menu-item">Posts</Link><br className='bm-item' />
            <Link to='/addPost' className="menu-item">Create Post</Link><br className='bm-item' />
            <Link to='/myPost' className="menu-item">My Post</Link><br className='bm-item' />
            <Link to='/profile' className="menu-item">Profile</Link><br className='bm-item' />
            <Link to='/posts' className="menu-item" onClick={props.handleLogout}>Log out</Link>
        </Menu>
    );
}

export default LoggedInNav;

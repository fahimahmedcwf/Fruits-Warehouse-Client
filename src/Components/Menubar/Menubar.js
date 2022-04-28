import React from 'react';
import './Menubar.css'
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../Images/Grocery-Logo.jpg'

const Menubar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
                <div className="container-fluid">
                    <div className='navbar-margin'>
                        <img src={logo} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/'>Home</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/service'>Service</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/about'>About</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/addUser'>Add User</CustomLink>
                            </li>
                            <li className="nav-item">
                                <CustomLink className='uNone' to='/updateUser'>Update User</CustomLink>
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item ms-auto left">
                                <CustomLink className='uNone login-btn rounded' to='/login'><span className='text-shadow'>Login</span></CustomLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menubar;
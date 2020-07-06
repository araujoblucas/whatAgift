import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from '../../api';

import Nav from '../../components/NavBar';

const response = api.get('/');

export default function Register({routeName}) {
    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div style={{marginTop: '80px'}}>

            <p >
                {routeName}
            </p>
        </div>

    </div>
    );
}



if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}

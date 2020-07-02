import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from './api';

import Example from './Nav';

const response = api.get('/');

export default function Login() {
    return (
    <div>
        <Example></Example>

        <div style={{marginTop: '80px'}}>

            <p >
                Login
            </p>
            </div>

    </div>
    );
}



if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}

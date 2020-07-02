import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from './api';

import Example from './Nav';

const response = api.get('/');

export default function Login({routeName}) {
    return (
    <div>
        <Example routeName={routeName}></Example>

        <div style={{marginTop: '80px'}}>

            <p >
                {routeName}
            </p>
            </div>

    </div>
    );
}



if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}

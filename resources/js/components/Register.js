import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from './api';
import './NavStyles.css';
import Example from './Nav';

const response = api.get('/');

export default function Register({routeName}) {
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



if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}

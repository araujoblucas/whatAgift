import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from './api';
import './NavStyles.css';
import { Link, useHistory } from 'react-router-dom';


const response = api.get('/');

export default function Example({routeName}) {
    const history = useHistory();
    const [shortNav, setShortNav] = useState('');

    const RecomendeActive =  routeName === 'login' ? 'liActive' : '';
    const SpecialDateActive = routeName === 'register' ? 'liActive' : '';
    const FindGiftActive = '';
    const LoginActive = '';

    const handleScroll = () => {
        let position = window.pageYOffset;



        console.log(position)

        if(position > 200) {
                setShortNav('Short');

        } else {
                setShortNav('');
        }
    };

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    return (
    <div className={'nav'+shortNav} >
        <div className={'logo'+shortNav}>
            <span>
              <p>What
                <br />
              Gift</p>
            </span>
            <h1>
                A
            </h1>
        </div>

        <div className={'menuLinks'+shortNav}>
            <li className={RecomendeActive}><NavLink activeClassName='linkActive' to="/Login">Recomende   </NavLink></li>
            <li className={SpecialDateActive}><NavLink activeClassName='linkActive' to="/Register" >Datas Especiais   </NavLink></li>
            <li className={FindGiftActive}><a href="#">Encontrar Presentes  </a></li>
            <li className={LoginActive}><a href="#">Login  </a></li>
        </div>
    </div>
    );
}



if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

import ReactDOM from 'react-dom';
import { useHistory, Link } from 'react-router-dom';
import React, { Image, Component, useState, useEffect  } from 'react';
import api from './api';
import './HomeStyles.css';
import Nav from './Nav';

import BackgroundImageSection1 from '../../../public/img/Section1.png';

const response = api.get('/');

export default function Home({routeName}) {
    const [title, setTitle] = useState();

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
    <div className="container">
        <Nav routeName={routeName}></Nav>

        <div className="section1" >
            <div>
                <h1>
                    Você precisa de
                </h1>
                <h1>
                    um presente? {routeName}
                </h1>
                <h2>
                    Mas não sabe o que escolher?
                </h2>
                <h2>
                    Nós podemos te ajudar!
                </h2>


                <div className="button"><a to="/">Encontrar</a></div>
            </div>
            <img src={BackgroundImageSection1} />
        </div>

    </div>
    );
}


if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}

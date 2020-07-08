import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect  } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function Nav({routeName}) {
                /*  */
    const [shortNav, setShortNav] = useState('');


    const RecomendeActive =  routeName === '' ? 'liActive' : '';
    const SpecialDateActive = routeName === 'register' ? 'liActive' : '';
    const FindGiftActive = '';
    const LoginActive = routeName === 'login' ? 'liActive' : '';

    const handleScroll = () => {
        let position = window.pageYOffset;

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
            <Link to="/">
                <span>
                <p>What
                    <br />
                Gift</p>
                </span>
                <h1>
                    A
                </h1>
            </Link>
        </div>

        <div className={'menuLinks'+shortNav}>
            <li className={RecomendeActive}>
                <NavLink to="/" >
                    Recomende
                </NavLink>
            </li>
            <li className={SpecialDateActive}>
                <NavLink  to="/l">
                    Datas Especiais
                </NavLink>
            </li>
            <li className={FindGiftActive}>
                <NavLink to="/" >
                    Encontrar Presentes
                </NavLink>
            </li>
            <li className={LoginActive}>
                <NavLink to="/login">
                    Login
                </NavLink>
            </li>
        </div>
    </div>
    );
}



if (document.getElementById('nav')) {
    ReactDOM.render(<Nav />, document.getElementById('nav'));
}

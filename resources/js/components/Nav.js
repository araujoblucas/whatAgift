import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import React, { Component, useState, useEffect  } from 'react';
import api from './api';
import './NavStyles.css';
import { Link, useHistory } from 'react-router-dom';


const response = api.get('/');

export default function Example() {
    const history = useHistory();
    const [shortNav, setShortNav] = useState('');
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
            <li><Link to="/Login">Recomende   </Link></li>
            <li className="liActive"><Link to="/Register" >Datas Especiais   </Link></li>
            <li><a href="#">Encontrar Presentes  </a></li>
            <li><a href="#">Login  </a></li>
        </div>
    </div>
    );
}



if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

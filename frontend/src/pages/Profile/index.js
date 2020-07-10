import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import Nav from '../../components/NavBar';
import api from '../../api';
import { Link, useHistory } from 'react-router-dom';



export default function Profile({routeName}) {

    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const id = localStorage.getItem('userId');
 
    
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div className="containerRegister">
            <p>{name} </p>
            <p> {email} </p>
            <p> {id} </p>


                <Link to="" onClick={() => handleLogout()} >Logout</Link>
            
        </div>

    </div>
    );
}



if (document.getElementById('Profile')) {
    ReactDOM.render(<Profile />, document.getElementById('Profile'));
}

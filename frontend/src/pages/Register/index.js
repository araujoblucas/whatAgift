import ReactDOM from 'react-dom';
import React from 'react';
import Nav from '../../components/NavBar';


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

import ReactDOM from 'react-dom';
import React from 'react';
import Nav from '../../components/NavBar';


export default function Login({routeName}) {
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



if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}

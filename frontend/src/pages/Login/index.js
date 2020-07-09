import ReactDOM from 'react-dom';
import React from 'react';
import Nav from '../../components/NavBar';
import { Link } from 'react-router-dom';
import './styles.css';

export default function Login({routeName}) {
    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div className="containerLogin ">
            <div className="boxLogin">
                <h1>Bem-Vindo</h1>

                <input className="inputLogin" placeholder="Usuário" />

                <input className="inputLogin" placeholder="Senha" type="password"/>

                <div className="loginLinks">
                    <Link to="/register">Registrar</Link>
                    <Link to="/">Esqueceu a senha?</Link>
                </div>
                <a className="boxLoginP" href="/">Entrar</a>
            </div>
        </div>

    </div>
    );
}



if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}

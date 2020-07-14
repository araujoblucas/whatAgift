import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import Nav from '../../components/NavBar';
import api from '../../api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';



export default function Login({routeName}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/api/user/login', { email, password });
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userEmail', response.data.email);
            localStorage.setItem('userImage', response.data.image);
            history.push('/');
            
        } catch (err) {
            alert('Falha no Login, tente novamente!');
        }
    }

    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div className="containerLogin ">
            <form className="boxLogin" onSubmit={handleLogin}>
                <h1>Bem-Vindo</h1>

                <input 
                    className="inputLogin inputMini" 
                    placeholder="E-mail" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input className="inputLogin" 
                    placeholder="Senha" 
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <div className="loginLinks">
                    <Link to="/register">Registrar</Link>
                    <Link to="/">Esqueceu a senha?</Link>
                </div>
                <button className="boxLoginP" type="submit">Entrar</button>
            </form>
        </div>

    </div>
    );
}



if (document.getElementById('Login')) {
    ReactDOM.render(<Login />, document.getElementById('Login'));
}

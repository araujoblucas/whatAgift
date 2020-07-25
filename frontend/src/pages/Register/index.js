import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Nav from '../../components/NavBar';
import api from '../../api';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';


export default function Register({routeName}) {
    const history = useHistory();
                    // Dados do Formulário
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            image,
            password,
        };

        try {
            const response = await api.post('/api/user', data);
            alert(`${response.data}`);
            history.push('/');
        } catch (err) {
            alert("Email já cadastrado!");
        }
    }


    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div className="containerRegister ">
            <div className="boxRegister">
                <h1>Vem ser um de nós</h1>
                <form onSubmit={handleRegister}>
                    <div className="divInputs">
                        
                        <input 
                            className="inputRegister" 
                            name="email" 
                            placeholder="E-mail" 
                            type="email" 
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        <input 
                            className="inputRegister" 
                            name="name" 
                            placeholder="Nome"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <input 
                            className="inputRegister" 
                            name="password" 
                            placeholder="Senha" 
                            type="password"
                            required
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />

                        <input 
                            className="inputRegister" 
                            name="image" 
                            placeholder="Imagem" 
                            required
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />

                    </div>
                    <div className="RegisterGroup" >
                        <Link onClick={() => history.goBack()}>
                            <div>
                                <FiArrowLeft size={32} />
                            </div>
                        </Link>
                        <button className="RegisterButton" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
            
        </div>

    </div>
    );
}



if (document.getElementById('register')) {
    ReactDOM.render(<Register />, document.getElementById('register'));
}

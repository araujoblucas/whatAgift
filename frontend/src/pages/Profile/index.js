import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import Nav from '../../components/NavBar';
import api from '../../api';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';


export default function Profile({routeName}) {
    const [name, setName] = useState(localStorage.getItem('userName'));
    const [email, setEmail] = useState(localStorage.getItem('userEmail'));
    const [newPassword, setNewPassword] = useState('');
    const [image, setImage] = useState(localStorage.getItem('userImage'));
    const [password, setPassword] = useState('');
    
    
    const id = localStorage.getItem('userId');
 
    
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
    <div>
        <Nav routeName={routeName}></Nav>

        <div className="containerProfile">
            <div className="boxProfile">
                <h1>Minha Conta</h1>

                <div className="mediumDiv">
                    <div>
                        <div className="mediumDivPhotoLogout">
                            <img src="https://pm1.narvii.com/6349/90afaadab7eeba9dd998886b0c7f9938be5daddc_00.jpg"/>

                            <button onClick={() => handleLogout()}>Logout</button>
                        </div>
                    </div>

                    <div className="mediumDivDivider">
                    <input 
                        name="name" 
                        placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        className="inputMini"
                        name="email" 
                        placeholder="E-mail" 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        name="password" 
                        placeholder="Nova Senha" 
                        type="password"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <input 
                        name="image" 
                        placeholder="Imagem" 
                        value={image}
                        onChange={e => setImage(e.target.value)}
                    />
                    </div>
                </div>

                <div className="footer">
                    <input 
                        className="footerInput"
                        name="newPassword" 
                        placeholder="Senha Atual" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                    <div className="buttonProfile">
                        Confirmar
                    </div>

                </div>

            </div>
            {/* <p>{name} </p>
            <p> {email} </p>
            <p> {id} </p>

            <Link to="" onClick={() => handleLogout()} >Logout</Link> */}
        </div>

    </div>
    );
}



if (document.getElementById('Profile')) {
    ReactDOM.render(<Profile />, document.getElementById('Profile'));
}

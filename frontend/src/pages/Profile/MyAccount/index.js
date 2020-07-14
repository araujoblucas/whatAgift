import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import Nav from '../../../components/NavBar';
import MyAccountSidebar from '../../../components/MyAccountSidebar';
import api from '../../../api';
import { useHistory } from 'react-router-dom';
import './styles.css';


export default function MyAccount({routeName}) {
    const [id, setId] = useState(localStorage.getItem('userId'));
    const [name, setName] = useState(localStorage.getItem('userName'));
    const [email, setEmail] = useState(localStorage.getItem('userEmail'));
    const [newPassword, setNewPassword] = useState('');
    const [image, setImage] = useState(localStorage.getItem('userImage'));
    const [password, setPassword] = useState('');
    
    
    
 
    
    const history = useHistory();

    async function update(e) {
        e.preventDefault();
        let data = {
            id,
            name,
            email,
            image,
            password,
            newPassword
        };
        try {
            let response = await api.post('/api/user/update', data);
            alert("Atualizado com sucesso!");
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userEmail', response.data.email);
            localStorage.setItem('userImage', response.data.image);
            setEmail(response.data.email);
            setName(response.data.name);
            setId(response.data.id);
            setImage(response.data.image);
            history.push('/profile');

        } catch (err) {
            alert("Erro ao atualizar, verifique sua senha")
            
        }
    }


    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
    <div>
        <Nav routeName={routeName}></Nav>
        

        <div className="containerProfile">

            <MyAccountSidebar pageName="MyAccount"/>

            <form className="boxProfile" onSubmit={update} >
                <h1>Minha Conta</h1>

                <div className="mediumDiv">
                    <div>
                        <div className="mediumDivPhotoLogout">
                            <img src={image} alt={name}/>

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
                        required
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                    />

                    <input 
                        className="inputMini"
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
                        type="password"
                        required
                        placeholder="Senha Atual" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}    
                    />
                    <button type="submit" className="buttonProfile">
                        Confirmar
                    </button>

                </div>
                
            </form>
        </div>

    </div>
    );
}



if (document.getElementById('MyAccount')) {
    ReactDOM.render(<MyAccount />, document.getElementById('MyAccount'));
}

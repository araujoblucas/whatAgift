import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function MyAccountSidebar ({pageName}){

    const MyAccount =  pageName === 'MyAccount' ? 'sidebarButtonActive' : '';   
    const FavoriteList = pageName === 'FavoriteList' ? 'sidebarButtonActive' : '';
    // const FindGiftActive = '';
    // const LoginActive = ( pageName === 'login' ) || (pageName === 'profile') ? 'sidebarButtonActive' : '';

    


    return (
        <div className="sidebarProfile">
            <ul>
                <li className={MyAccount}><Link to="/MyAccount">Minha conta</Link></li>
                <li className={FavoriteList}><Link to="/profile/FavoriteList">Listar Favoritos</Link></li>
                <li>Postar presente</li>
                <li>Listar meus presentes</li>
                <li>Logout</li>

            </ul>
        </div>
    );
}



if (document.getElementById('MyAccountSidebar')) {
    ReactDOM.render(<MyAccountSidebar />, document.getElementById('MyAccountSidebar'));
}

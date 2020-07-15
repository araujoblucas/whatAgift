import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import React from 'react';
import './styles.css';

export default function MyAccountSidebar ({pageName}){

    const MyAccount =  pageName === 'MyAccount' ? 'sidebarButtonActive' : '';   
    const FavoriteList = pageName === 'FavoriteList' ? 'sidebarButtonActive' : '';
    const PostGift = pageName === 'PostGift' ? 'sidebarButtonActive' : '';
    // const FindGiftActive = '';
    // const LoginActive = ( pageName === 'login' ) || (pageName === 'profile') ? 'sidebarButtonActive' : '';

    


    return (
        <div className="sidebarProfile">
            <ul>
                <li className={MyAccount}><Link to="/profile/MyAccount">Minha conta</Link></li>
                <li className={PostGift}><Link to="/profile/PostGift">Postar presente</Link></li>
                <li className={FavoriteList}><Link to="/profile/FavoriteList">Listar Favoritos</Link></li>
                
                <li>Listar meus presentes</li>
                <li>Logout</li>

            </ul>
        </div>
    );
}



if (document.getElementById('MyAccountSidebar')) {
    ReactDOM.render(<MyAccountSidebar />, document.getElementById('MyAccountSidebar'));
}

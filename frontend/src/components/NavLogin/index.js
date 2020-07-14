import { NavLink } from 'react-router-dom';
import React  from 'react';



export default function NavLogin() {
    const userName = localStorage.getItem('userName');
    
    
    if(userName == null){
        return <NavLink to="/login">Login</NavLink>;
    } else {
        return <NavLink to="/profile/MyAccount">Minha Conta</NavLink>
    }
}

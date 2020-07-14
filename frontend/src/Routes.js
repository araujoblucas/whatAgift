import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyAccount from './pages/Profile/MyAccount';
import FavoriteList from './pages/Profile/FavoriteList';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <Home routeName='home'/> } />
            <Route path="/Login" exact component={() => <Login routeName='login' /> } />
            <Route path="/register" component={() => <Register routeName='register' /> } />
            <Route path="/profile/MyAccount" component={() => <MyAccount routeName='profile' /> } />
            <Route path="/profile/FavoriteList" component={() => <FavoriteList routeName='profile' /> } />
        </Switch>
    </BrowserRouter>
    );
}
if (document.getElementById('routes')) {
    ReactDOM.render(<Routes />, document.getElementById('routes'));
}

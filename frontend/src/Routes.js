import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <Home routeName='home'/> } />
            <Route path="/Login" exact component={() => <Login routeName='login' /> } />
            <Route path="/register" component={() => <Register routeName='register' /> } />
            <Route path="/profile" component={() => <Profile routeName='profile' /> } />
        </Switch>
    </BrowserRouter>
    );
}
if (document.getElementById('routes')) {
    ReactDOM.render(<Routes />, document.getElementById('routes'));
}

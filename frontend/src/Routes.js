import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'


export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <Home routeName='home'/> } />
            <Route path="/Login" exact component={() => <Login routeName='login' /> } />
            <Route path="/register" component={() => <Register routeName='register' /> } />
        </Switch>
    </BrowserRouter>
    );
}
if (document.getElementById('routes')) {
    ReactDOM.render(<Routes />, document.getElementById('routes'));
}

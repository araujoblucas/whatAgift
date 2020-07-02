import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register'

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <Register routeName={'home'} /> } />
            <Route path="/Login" exact component={() => <Register routeName={'login'} /> } />
            <Route path="/register" component={() => <Register routeName={'register'} /> } />
        </Switch>
    </BrowserRouter>
    );
}
if (document.getElementById('routes')) {
    ReactDOM.render(<Routes />, document.getElementById('routes'));
}

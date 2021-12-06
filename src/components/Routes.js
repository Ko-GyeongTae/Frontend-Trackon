import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Login from "../routes/Login";
import Home from "../routes/Home";

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Redirect from="*" to="/" />
    </Switch>
)

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Redirect from="*" to="/" />
    </Switch>
)

const AppRouter = ({ isLoggedIn }) => {
    return (isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />) // If logged in, show after login page
}

export default withRouter(AppRouter);
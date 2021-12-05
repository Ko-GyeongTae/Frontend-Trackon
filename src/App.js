import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Routes from './components/Routes';

const cookies = new Cookies();

function App() {
  const isLoggedIn = cookies.get('accessToken') ? true : false;
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Routes isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
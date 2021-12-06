import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Routes from './components/Routes';

// Generate object for access to browser cookie value
const cookies = new Cookies();

function App() {
  // If Accesstoken is exist, change login status true. if not, change status false.
  const isLoggedIn = cookies.get('accessToken') ? true : false;

  // Call router from src/components/Routes.js
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
import React from 'react';
import { Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { PrivateRoute, RestrictedRoute } from './components/Routes';
import { CompanyProvider } from './context/CompanyContext';
import { UserProvider } from './context/UserContext';
import { Dashboard } from './views/Dashboard';
import { Login } from './views/Login';

export const App = () => {

  return (
    <UserProvider>
      <CompanyProvider>
        <Header />
        <Switch>
          <RestrictedRoute component={Login} path="/login" redirectTo="/dashboard" />
          <PrivateRoute component={Dashboard} path="/dashboard" />
        </Switch>
      </CompanyProvider>
    </UserProvider>
  );
}
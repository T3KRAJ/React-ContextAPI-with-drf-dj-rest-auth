import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import routes from './config/routes';
import { AuthProvider } from "./context/context";
import AppRoute from './components/AppRoutes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route) => (
            <AppRoute
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Router>
    </AuthProvider>
  );
}
 
export default App;

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { routes } from './routes';

function Guide() {
  return "Hello";
}


function App() {
  return (
    <BrowserRouter>
      {routes.map(({ path, component }) => {
        return <Route key={path} exact path={path} component={component} />
      })}
    </BrowserRouter>
  );
}

export default App;

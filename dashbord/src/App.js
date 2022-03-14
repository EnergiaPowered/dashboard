import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import routes from './globals/route';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          
          {
            routes.map((route ,index) => { 
             return( <Route key={index} path={route.path} exact >
               {route.component}
             </Route> )
            })
          }
        </Switch>
      </Router>
    
    </div>
  );
}
export default App;

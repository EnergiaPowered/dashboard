import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./globals/routes";
import "./App.css";

function App() {

   
       return (
    <div className="App">
      
      <Router>
        <Switch>
          
          {
            routes.map((route ,index) => { 
             return( <Route key={index} path={route.path} component={route.component} exact/> )
            })
          }
        </Switch>
      </Router>
    
    </div>
    );
  }
    
export default App;

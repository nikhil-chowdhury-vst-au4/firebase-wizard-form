import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from "../src/Components/form"
import "./styles.css";
import Question from "./Components/signup/Signup";
import FormPage from "../src/Components/forms/Login"
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
     <BrowserRouter>
     <Switch>
     
          <Route path="/login">
            <FormPage />
          </Route>
          <Route path="/signup">
            <Question />
          </Route>
          <Route path="/dashboard">
            <Question />
          </Route>
        </Switch>
     
     </BrowserRouter>
   
    </div>
  );
}

export default App;

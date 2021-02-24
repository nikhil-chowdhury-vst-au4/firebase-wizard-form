import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Form from "../src/Components/form"
import Question from "../src/Components/Header/header"
import FormPage from "../src/Components/forms/Login"

function App() {
  return (
    <div className="App">
      <Question />
   <FormPage />
    </div>
  );
}

export default App;

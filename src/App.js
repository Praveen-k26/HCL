import React from 'react';
import {Route, Switch} from 'react-router-dom';


import './App.css';
import LoginPage from "./pages/loginPage/loginPage.component";
import Chef from "./pages/chef/chef.component";
import ConsolidationStation from "./pages/consolidationStation/consolidationStation.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
        <Header />
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route path='/chef' component={Chef} />
        <Route path='/consolidationStation' component={ConsolidationStation} />
      </Switch>

    </div>
  );
}

export default App;

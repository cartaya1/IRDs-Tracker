import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Warehouse from './pages/Warehouse';
import Techs from './pages/Techs';
import Requests from './pages/Requests';
import About from './pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/warehouse' component={Warehouse} />
          <Route path='/techs' component={Techs} />
          <Route path='/requests' component={Requests} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

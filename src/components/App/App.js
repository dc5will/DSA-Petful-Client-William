import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeRoute from '../HomeRoute/HomeRoute';
import AdoptionRoute from '../AdoptionRoute/AdoptionRoute';
import { Link } from 'react-router-dom';
import ResetRoute from '../ResetRoute/ResetRoute';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <div id="App">

        <main>
          <Router>
          <header>
            <Link to="/"><h1 className='Logo'>Petful</h1></Link>
          </header>
            <Route exact path='/' component={HomeRoute} />
            <Route path='/adopt' component={AdoptionRoute} />
            <Route path='/reset' component={ResetRoute} />
          </Router>
        </main>

      </div>
    );
  }
}

export default App;

import React from 'react';
import './app.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NoteForm from './pages/NoteForm';
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header appName="Notes"/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={NoteForm} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

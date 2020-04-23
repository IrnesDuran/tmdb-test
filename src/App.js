import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import ContainerComponent from './pages/main.component';
import ItemPage from './pages/item-page.component';
import Footer from  './components/footer/footer.component';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' render={ () => (<Redirect to ='/tv-shows'/>) }/>
        <Route path='/movies' component={ContainerComponent}/>
        <Route path='/tv-shows' component={ContainerComponent}/>
        <Route path='/:item' component={ItemPage} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

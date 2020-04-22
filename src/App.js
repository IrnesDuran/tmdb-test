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
        <Route exact path='/' component={ContainerComponent} />
        <Route path='/item' component={ItemPage} />
        <Route path='/movies' render={ () => (<ContainerComponent categoryType= {'movies'}/>)} />
        <Route path='/tv-shows' render={ () => (<ContainerComponent categoryType= {'tv-shows'}/>)} />
        {/* <Route exact path='/signin' render={ () => this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInAndSignUpPage/>)} /> */}
        
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './Footer';
import CSE_dep from './CSE_dep';
import EE_dep from './EE_dep';
import ECE_dep from './ECE_dep';
import IT_dep from './IT_dep';
import CE_dep from './CE_dep';
import ME_dep from './ME_dep';
import FY_dep from './FY_dep';
import Authenticate from './Authenticate';

const App =() => {
  return (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/cse_dep' component={CSE_dep} />
      <Route exact path='/ee_dep' component={EE_dep} />
      <Route exact path='/ece_dep' component={ECE_dep} />
      <Route exact path='/it_dep' component={IT_dep} />
      <Route exact path='/ce_dep' component={CE_dep} />
      <Route exact path='/me_dep' component={ME_dep} />
      <Route exact path='/fy_dep' component={FY_dep} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/auth' component={Authenticate} />
      
      <Redirect to='/' />
    </Switch>
    <Footer />    
  </>
  );
};

export default App;
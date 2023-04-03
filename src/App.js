import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Home from './views/Home/Home.js';
import LearningModel from './views/LearningModel/LearningModel.js';
import Program from './views/Program/Program.js';
import Igniters from './views/Igniters/Igniters.js';
import ContactUs from './views/ContactUs/ContactUs.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => (<Redirect to="/home" />)} />
        <Route path='/home' component={Home} />
        <Route path='/learning-model' component={LearningModel} />
        <Route path='/program' component={Program} />
        <Route path='/igniters' component={Igniters} />
        <Route path='/contact-us' component={ContactUs} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

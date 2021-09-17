import Home from './Layouts/Home/Home'
import Users from './Layouts/Users/Users'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";


function App() {
  return (
    <div className="mainContainer">
    <Router>
        <Menu/>
        <Switch>
          <Route exact path="/users" component={withRouter(Users)}/>
          <Route exact path="/posts" component={withRouter(Users)}/>
          <Route exact path="/" component={withRouter(Home)}/>
        </Switch>
        <Footer/>
    </Router>
</div>
  );
}

export default App;

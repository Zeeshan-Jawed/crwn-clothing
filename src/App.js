
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Shop from './components/shop/shop.component';
import { Homepage } from './pages/homepage/homepage.components';


function App() {
  return (
    <div >
     {/* <Homepage/> */}
     <Router>
     <Switch>
       <Route exact path='/' component={Homepage} />
       <Route path='/shop' component={Shop} />
       </Switch>
     </Router>
    </div>
  );
}


export default App;

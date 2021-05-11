import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CarList } from './components/CarList';
import {data} from './components/data'
import { CarDetails } from './components/CarDetails';
import { Signup } from './components/Signup';

function App() {
  return (
    <>
      <Router>

<Switch>
          <Route exact path="/">
            <CarList list={data}/>
          </Route>
          <Route path="/info/:id?">
          <CarDetails/>
          </Route>
          <Route path="/signup">
          <Signup/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;

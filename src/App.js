import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Categories from './Categories';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <Switch>
        <Route path={`/:category`}>
          <Categories />
        </Route>
        <Redirect to={`/christian`} />
      </Switch>
    </Router>
  );
}

export default App;

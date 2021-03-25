import { BrowserRouter as Router, Switch, Route } 
  from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;

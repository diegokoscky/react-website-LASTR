import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer/Footer';
import Home from './components/pages/HomePage/Home'
import Servicos from './components/pages/Servicos/Servicos';
import Produtos from './components/pages/Produtos/Produtos';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/servicos" component={Servicos}/>
                <Route path="/Produtos" component={Produtos}/>
                <Route path="/sign-up" component={SignUp}/>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';



function App() {
  return (
    <div className="App">
      <Router>
        
        <Switch>
          <Route path="/home">
            <Header></Header>
            <div className="container">
              <Home></Home>
            </div>
          </Route>
          <Route path="/about">
            <Header></Header>
            <div className="container">
              <About></About>
            </div>
          </Route>
          <Route path="/blog">
            <Header></Header>
            <div className="container">
              <Blog></Blog>
            </div>
          </Route>
          <Route path="/content">
            <Header></Header>
            <div className="container">
              <Content></Content>
            </div>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <div className="container">
              <Home></Home>
            </div>
          </Route>
          <Route path="/contact">
            <Header></Header>
            <div className="container">
                  <Contact></Contact>
            </div>
          </Route>
          <Route path="*">
            <div className="container">
              <NoPage></NoPage>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

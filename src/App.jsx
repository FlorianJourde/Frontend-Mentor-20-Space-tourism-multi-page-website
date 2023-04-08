// import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/destination">
            <Destination/>
          </Route>
          <Route path="/crew">
            <Crew/>
          </Route>
          <Route path="/technology">
            <Technology/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App

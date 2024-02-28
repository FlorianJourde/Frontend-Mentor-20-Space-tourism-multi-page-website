import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./styles/index.scss";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/destination" component={Destination} />
          <Route path="/crew" component={Crew} />
          <Route path="/technology" component={Technology} />
          <Redirect to="/" />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App

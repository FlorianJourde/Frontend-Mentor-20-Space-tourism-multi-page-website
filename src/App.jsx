import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import "./styles/index.scss";

function App() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar baseUrl={baseUrl} />

        <Switch>
          <Route exact path={baseUrl} component={Home} />
          <Route path={baseUrl + "destination"} component={Destination} />
          <Route path={baseUrl + "crew"} component={Crew} />
          <Route path={baseUrl + "technology"} component={Technology} />
        </Switch>

      </BrowserRouter>
    </div>
  )
}

export default App

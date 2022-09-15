import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Zohoform";
import Integration from "./components/Integration";
import ZohoIntegration from "./components/ZohoIntegration";
import Mondayintegration from "./components/Mondayintegration";
import Zohoform from "./components/Zohoform";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Signup />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/zohoform">
              <Zohoform />
            </Route>
            <Route exact path="/integration">
              <Integration />
            </Route>
            <Route exact path="/integration/zoho">
              <ZohoIntegration />
            </Route>
            <Route exact path="/integration/monday">
              <Mondayintegration />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/About";

function App() {
  return (
    <div className="app">
      <Router>
        <Home />
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./Home";
import ReactExamples from "./ReactExamples";
import VanillaJSExamples from "./VanillaJSExamples";
import GitExamples from "./GitExamples";
import JSRegexExamples from "./JSRegexExamples";

const App = () => {
  return (
    <Container>
      <Router>
        <ul>
          <li>
            <Link to="/learn-through-examples">Home</Link>
          </li>
          <li>
            <Link to="/learn-through-examples/react">React</Link>
          </li>
          <li>
            <Link to="/learn-through-examples/vanillajs">About</Link>
          </li>
          <li>
            <Link to="/learn-through-examples/git">Git</Link>
          </li>
          <li>
            <Link to="/learn-through-examples/js-regex">JS Regex</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/learn-through-examples">
            <Home />
          </Route>
          <Route exact path="/learn-through-examples/react">
            <ReactExamples />
          </Route>
          <Route path="/learn-through-examples/vanillajs">
            <VanillaJSExamples />
          </Route>
          <Route path="/learn-through-examples/git">
            <GitExamples />
          </Route>
          <Route path="/learn-through-examples/js-regex">
            <JSRegexExamples />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default App;

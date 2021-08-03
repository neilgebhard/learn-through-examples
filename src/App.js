import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import ReactExamples from "./ReactExamples";
import VanillaJSExamples from "./VanillaJSExamples";
import GitExamples from "./GitExamples";
import JSRegexExamples from "./JSRegexExamples";

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="">Neil Gebhard</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="">
                <Link to="/learn-through-examples">Home</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/learn-through-examples/react">React</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/learn-through-examples/vanillajs">Vanilla Js</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/learn-through-examples/git">Git</Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link to="/learn-through-examples/js-regex">JS Regex</Link>
              </Nav.Link>
            </Nav>
        </Navbar>
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

import 'semantic-ui-css/semantic.min.css'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout/Layout";
import GitExamples from "./Pages/GitExamples";
import JSRegexExamples from "./Pages/JSRegexExamples";
import ReactExamples from "./Pages/ReactExamples";
import ReactTestingExamples from "./Pages/ReactTestingExamples";
import JavascriptExamples from "./Pages/JavascriptExamples";
import VSCodeExamples from "./Pages/VSCodeExamples";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/react">
            <ReactExamples />
          </Route>
          <Route exact path="/react-testing">
            <ReactTestingExamples />
          </Route>
          <Route exact path="/javascript">
            <JavascriptExamples />
          </Route>
          <Route exact path="/git">
            <GitExamples />
          </Route>
          <Route exact path="/js-regex">
            <JSRegexExamples />
          </Route>
          <Route exact path="/vs-code">
            <VSCodeExamples />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;

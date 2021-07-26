import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import UseStateExample from "./UseStateExample.js";
import JSXExample from "./JSXExample.js";
import ListExample from "./ListExample.js";

function App() {
  return (
    <Container>
      <h3>Learn React Hooks Through Examples</h3>
      <p>This resource ise perfect as a refresher for concepts. The examples can be used as boilerplate. They are simple, self-explanatory, and minimalist by design.</p>
      <UseStateExample />
      <JSXExample />
      <ListExample />
    </Container>
  );
}

export default App;

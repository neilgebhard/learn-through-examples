import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import ReactExamples from "./ReactExamples";
import VanillaJSExamples from "./VanillaJSExamples";

const App = () => {
  return (
    <Container>
      <ReactExamples />
      <VanillaJSExamples />
    </Container>
  );
}

export default App;

import UseStateExample from "../reactExamples/UseState";
import JSXExample from "../reactExamples/JSX";
import ListExample from "../reactExamples/List";
import UseEffectExample from "../reactExamples/UseEffect";
import UseReducerExample from "../reactExamples/UseReducer";
import UseContextExample from "../reactExamples/UseContext";
import { Header } from "semantic-ui-react";

const ReactExamples = () => {
  return (
    <>
      <Header as="h1" dividing>
        React
      </Header>
      <UseStateExample />
      <JSXExample />
      <ListExample />
      <UseEffectExample />
      <UseReducerExample />
      <UseContextExample />
    </>
  );
};

export default ReactExamples;

import UseStateExample from "./reactExamples/UseStateExample.js";
import JSXExample from "./reactExamples/JSXExample.js";
import ListExample from "./reactExamples/ListExample.js";
import UseEffectExample from "./reactExamples/UseEffectExample.js";
import UseReducerExample from "./reactExamples/UseReducerExample.js";

const ReactExamples = () => {
  return (
    <>
      <h3>React</h3>
      <p className="text-secondary">
        React examples and boilerplate.
      </p>
      <UseStateExample />
      <JSXExample />
      <ListExample />
      <UseEffectExample />
      <UseReducerExample />
    </>
  );
};

export default ReactExamples;

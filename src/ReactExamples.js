import UseStateExample from "./reactExamples/UseStateExample.js";
import JSXExample from "./reactExamples/JSXExample.js";
import ListExample from "./reactExamples/ListExample.js";
import UseEffectExample from "./reactExamples/UseEffectExample.js";

const ReactExamples = () => {
  return (
    <>
      <h3>Learn React Hooks Through Examples</h3>
      <p>
        This resource is perfect as a refresher for React concepts. The examples
        can be used as boilerplate. They are simple, self-explanatory, and
        minimalist by design.
      </p>
      <UseStateExample />
      <JSXExample />
      <ListExample />
      <UseEffectExample />
    </>
  );
};

export default ReactExamples;

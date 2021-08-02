import UseStateExample from "./reactExamples/UseStateExample.js";
import JSXExample from "./reactExamples/JSXExample.js";
import ListExample from "./reactExamples/ListExample.js";
import UseEffectExample from "./reactExamples/UseEffectExample.js";

const ReactExamples = () => {
  return (
    <>
      <h3>React</h3>
      <p className="text-secondary">
        React examples designed as refreshers.
      </p>
      <UseStateExample />
      <JSXExample />
      <ListExample />
      <UseEffectExample />
    </>
  );
};

export default ReactExamples;

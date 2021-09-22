import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const UseStateExample = () => {
  const codeSnippet = `
  const App = () => {
      const [count, setCount] = useState(0);

      const handleClick = () => {
          setCounter((count) => count + 1);
      };

      return (
          <div>
              <div>{count}</div>
              <button onClick={handleClick}>Increment</button>
          </div>
      );
  };
`;

  return (
    <>
      <Header as="h3">
        <a href="https://reactjs.org/docs/hooks-state.html">useState()</a>
      </Header>
      <p>
        The initial state is passed in as an argument in useState(). Then,
        useState() returns the current state and a function that updates it.
      </p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default UseStateExample;

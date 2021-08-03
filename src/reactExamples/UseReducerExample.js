import CodeSnippet from "../CodeSnippet";

const UseReducerExample = () => {
    const codeSnippet = `
        const initialState = { count: 0 }

        function reducer(state, action) {
            switch (action.type) {
            case "increment":
                return { count: state.count + 1 };
            case "decrement":
                return { count: state.count - 1 };
            default:
                throw new Error();
            }
        }
        
        const App = () => {
            const [state, dispatch] = useReducer(reducer, initialState);
        
            return (
            <div>
                <div>{state.count}</div>
                <button onClick={() => dispatch({type: "increment"})}>increment</button>
                <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
            </div>
            );
        };
    `;

  return (
    <>
      <p>
        <a href="https://reactjs.org/docs/hooks-reference.html#usereducer">useReducer()</a>
      </p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default UseReducerExample;

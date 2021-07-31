import CodeSnippet from "../CodeSnippet";

const UseStateExample = () => {
    const codeSnippet = `
        const App = () => {
            // the initial state is passed in as an argument
            // useState() returns the current state and a function that updates it
            const [count, setCount] = useState(0);

            const handleClick = () => {
                setCounter(count + 1);
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
            <p><a href="https://reactjs.org/docs/hooks-state.html">useState()</a></p>
            <CodeSnippet codeSnippet={codeSnippet} />
        </>
    );
};

export default UseStateExample;

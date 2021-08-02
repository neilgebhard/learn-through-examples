import CodeSnippet from "../CodeSnippet";

const UseEffectExample = () => {
  const codeSnippet = `
      // Passing an empty array as the second argument runs the effect only once
      useEffect(() => {
          fetch('http://example.com/random-movie.json')
              .then(response => response.json())
              .then(data => setMovie(data));
      }, []);
    `;

  return (
    <>
      <p>
        <a href="https://reactjs.org/docs/hooks-effect.html">UseEffect()</a>
      </p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default UseEffectExample;

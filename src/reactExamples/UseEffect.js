import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const UseEffectExample = () => {
  const codeSnippet = 
`
  useEffect(() => {
    fetch('http://example.com/random-movie.json')
        .then(response => response.json())
        .then(data => setMovie(data));
  }, []);
`;

  return (
    <>
      <Header as="h3"><a href="https://reactjs.org/docs/hooks-effect.html">useEffect()</a></Header>
      <p>Passing an empty array as the second argument in useEffect executes the function only once.</p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default UseEffectExample;

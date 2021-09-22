import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const ListExample = () => {
  const codeSnippet = `
  <ol>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ol>
`;

  return (
    <>
      <Header as="h3">
        <a href="https://reactjs.org/docs/lists-and-keys.html">Lists</a>
      </Header>
      <p>Keys inside list items should be unique for optimized perfomance.</p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default ListExample;

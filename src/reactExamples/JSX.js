import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const JSXStateExample = () => {
  const codeSnippet = `
  <div
    style={{
      paddingTop: 20,
      width: 500,
    }}
  >
    <div className="title">Title</div>
  </div>;
`;

  return (
    <div>
      <Header as="h3">
        <a href="https://reactjs.org/docs/introducing-jsx.html">
          JSX: style and className
        </a>
      </Header>
      <CodeSnippet codeSnippet={codeSnippet} />
    </div>
  );
};

export default JSXStateExample;

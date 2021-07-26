import "bootstrap/dist/css/bootstrap.min.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const JSXStateExample = () => {
  const codeSnippet = `
        const App = () => {
            return (
            // CSS properties are camel cased
            <div
                style={{
                paddingTop: 20,
                width: 500
                }}
            >
                <h1 className="title">Title</h1>
            </div>
            );
    `;

  return (
    <div>
      <p>
        <a href="https://reactjs.org/docs/hooks-state.html">
          JSX: style and className
        </a>
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default JSXStateExample;

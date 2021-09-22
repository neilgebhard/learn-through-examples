import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ codeSnippet }) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomOneDark}>
      {codeSnippet}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;

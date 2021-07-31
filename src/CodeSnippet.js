import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = (props) => {
    return (
        <>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {props.codeSnippet}
            </SyntaxHighlighter>
        </>
    );
}

export default CodeSnippet;
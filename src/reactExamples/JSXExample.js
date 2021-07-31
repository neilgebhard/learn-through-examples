import CodeSnippet from "../CodeSnippet";

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
      <p>
        <a href="https://reactjs.org/docs/introducing-jsx.html">
          JSX: style and className
        </a>
      </p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </div>
  );
};

export default JSXStateExample;

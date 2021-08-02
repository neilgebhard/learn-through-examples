import CodeSnippet from "../CodeSnippet";

const ListExample = () => {
  const codeSnippet = `
      // key must be unique, avoid using the index of map
      <ol>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ol>
    `;

  return (
    <>
      <p>
        <a href="https://reactjs.org/docs/lists-and-keys.html">Lists</a>
      </p>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default ListExample;

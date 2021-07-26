import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ListExample = () => {
  const codeSnippet = `
    const App = () => {
        return (
          <div>
            <h3>List of Items</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    `;

  return (
    <div>
      <p>
        <a href="https://reactjs.org/docs/lists-and-keys.html">Lists</a>
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeSnippet}
      </SyntaxHighlighter>
    </div>
  );
};

export default ListExample;

import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const useContextExample = () => {
  const codeSnippet = 
`
  import { useState, createContext } from "react";

  const CountContext = createContext();
  
  function CountProvider({ children }) {
      const [count, setCount] = useState(0);
      const value = { count, setCount };
  
      return (
      <CountContext.Provider value={value}>{children}</CountContext.Provider>
      );
  }
  
  function useCount() {
      const context = useContext(CountContext);
  
      if (context === undefined) {
      throw new Error("useCount must be used within a CountProvider");
      }
  
      return context;
  }
  
  export { CountProvider, useCount };
`;

  return (
    <>
      <Header as="h3">
        <a href="https://reactjs.org/docs/hooks-reference.html#usecontext">useContext()</a>
      </Header>
      <CodeSnippet codeSnippet={codeSnippet} />
    </>
  );
};

export default useContextExample;

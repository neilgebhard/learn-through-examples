import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const ReactTestingExamples = () => {
  const codeSnippet1 = `
    import { render, screen } from "@testing-library/react";
    import userEvent from "@testing-library/user-event";

    describe("my function or component", () => {
        test("does the following", () => {});
    });
    
    describe("true is truthy and false is falsy", () => {
        test("true is truthy", () => {
            expect(true).toBe(true);
            });
        
            test("false is falsy", () => {
            expect(false).toBe(false);
        });
    });
    
    describe("App", () => {
        test("renders App component", () => {
            render(<App />);
        
            const text = screen.getByText(/Search/);
            expect(text).toBeInTheDocument();
        });
    });
    
    describe("App", () => {
        test("renders App component", () => {
            render(<App />);
        
            const textbox = screen.getByRole("textbox");
            expect(textbox).toBeInTheDocument();
        });
    });
    
    describe("App", () => {
        test("renders App component", async () => {
            render(<App />);
        
            const text = screen.queryByText(/Signed in as/);
            expect(text).toBeNull();
        
            const text2 = await screen.findByText(/Signed in as/);
            expect(text2).toBeInTheDocument();
        });
    });
    
    describe("Search", () => {
        test("calls the onChange callback handler", () => {
            const onChange = jest.fn();
        
            render(
                <Search value="" onChange={onChange}>
                Search:
                </Search>
            );
        
            fireEvent.change(screen.getByRole("textbox"), {
                target: { value: "JavaScript" },
            });
        
            expect(onChange).toHaveBeenCalledTimes(1);
        });
    });
    
    describe("App", () => {
        test("renders App component", async () => {
            render(<App />);
        
            // wait for the user to resolve
            await screen.findByText(/Signed in as/);
        
            expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();
        
            await userEvent.type(screen.getByRole("textbox"), "JavaScript");
        
            expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument();
        });
    });
    
    describe("App", () => {
        test("fetches stories from an API and displays them", async () => {
            const stories = [
                { objectID: "1", title: "Hello" },
                { objectID: "2", title: "React" },
            ];
        
            const promise = Promise.resolve({ data: { hits: stories } });
        
            axios.get.mockImplementationOnce(() => promise);
        
            render(<App />);
        
            await userEvent.click(screen.getByRole("button"));
        
            await act(() => promise);
        
            expect(screen.getAllByRole("listitem")).toHaveLength(2);
        });
    
        test("fetches stories from an API and fails", async () => {
            axios.get.mockImplementationOnce(() => Promise.reject(new Error()));
        
            render(<App />);
        
            await userEvent.click(screen.getByRole("button"));
        
            const message = await screen.findByText(/Something went wrong/);
        
            expect(message).toBeInTheDocument();
        });
    });
  `;

  return (
    <>
      <Header as="h1" dividing>
        React Testing
      </Header>
      <Header as="h3">
        <a href="https://testing-library.com/docs/react-testing-library/intro/">
          @testing-library/react
        </a>{" "}
        &{" "}
        <a href="https://testing-library.com/docs/ecosystem-user-event/">
          @testing-library/user-event
        </a>
      </Header>
      <Header as="h5">Why test?</Header>
      <ul>
        <li>Build confidence in deployment</li>Enchance workflows such as with
        test driven development
      </ul>
      <Header as="h5">getByText</Header>
      <p>
        Returns the matching node for a query, and throw a descriptive error if
        no elements match or if more than one match is found (use getAllBy
        instead if more than one element is expected).
      </p>
      <Header as="h5">queryByText</Header>
      <p>
        Returns the matching node for a query, and return null if no elements
        match. This is useful for asserting an element that is not present.
        Throws an error if more than one match is found (use queryAllBy instead
        if this is OK).
      </p>
      <Header as="h5">findByText</Header>
      <p>
        Returns a Promise which resolves when an element is found which matches
        the given query. The promise is rejected if no element is found or if
        more than one element is found after a default timeout of 1000ms. If you
        need to find more than one element, use findAllBy.
      </p>
      <CodeSnippet codeSnippet={codeSnippet1} />
    </>
  );
};

export default ReactTestingExamples;

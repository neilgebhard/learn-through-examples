import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const JavascriptExamples = () => {
  const codeSnippet1 = `
    const fn = (param1, ... , param5) => {
      return new Promise((resolve, reject) => {
          someAsyncFunc((err, value) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(value);
              }
          });
      });
    }
  `;

  const codeSnippet2 = `
    async fn(param) => {
      try {
          const val = await promiseFn();
      } catch(err) {
          console.log(err)
      }
    }
  `;

  const codeSnippet3 = `
    [0, 1, 2].concat([3, 4, 5])
    // output: [0, 1, 2, 3, 4, 5]
    
    [0, 1, 2].join(', ')
    // output: "0, 1, 2"
    
    [0, 1, 2, 3, 4, 5].slice(0, 3)
    // output: [0, 1, 2]
    
    ["apple", "orange", "banana"].indexOf("orange")
    // output: 1
    
    ["apple", "orange", "banana", "orange"].lastIndexOf("orange")
    // output: 3
    
    let sum = 0
    [0, 1, 2, 3].forEach((int) => sum += int)
    // sum = 6
    
    [0, 1, 2].every(int => int < 5)
    // output: true
    
    [0, 1, 2].some(int => int < 2)
    // output: true
    
    [0, 1, 2, 3, 4].filter(int => int % 2 === 0)
    // output: [0, 2, 4]
    
    [0, 1, 2].map(int => int + 1)
    // output: [1, 2, 3]
    
    [1, 3, 5].reduce((acc, val) => acc + val)
    // output: 9
    
    ["e", "l", "p", "p", "a"].reduceRight((acc, val) => acc + val)
    // output: "apple"
    
    const arr = [0, 1, 2]
    arr.pop()
    // output: 2
    // arr = [0, 1]
    
    const arr = [0, 1, 2]
    arr.push(3)
    // output: 3
    // arr = [0, 1, 2, 3]
    
    [0, 1, 2, 3].reverse()
    // output: [3, 2, 1, 0]
    
    [2, 3, 8, 0].sort()
    // output: [0, 2, 3, 8]
    
    [0, 1, 2, 3, 4].splice()
    const arr = [0, 1, 2, 3, 4]
    arr.splice(1, 2)
    // output: [1, 2]
    // arr = [0, 3, 4]
    
    const arr = [0, 1, 2, 3]
    arr.unshift(-1)
    // output: 5 // length of arr
    // arr = [-1, 0, 1, 2, 3]
    
    [0, 1, 2, 3].toString()
    // output: "0,1,2,3"
    
    Array.from("bar")
    // output: ["b", "a", "r"]
    
    new Set([0, 1, 2, 0, 1])
    // output: {0, 1, 2}
    
    Array.of(5) // [5]
    Array(5) // array of 7 empty slots
  `;

  const codeSnippet4 = `
    const person = {
        first: "Neil",
        last: "Gebhard"
    }

    // spread operator (shallow copy)
    const p1 = { ...person }

    // Object.assign() (shallow copy)
    const p2 = Object.assign({}, person)

    // using JSON (deep copy)
    const p3 = JSON.parse(JSON.stringify(person))
    `;

  return (
    <>
      <Header as="h1" dividing>
        JavaScript
      </Header>
      <p>Vanilla JavaScript examples.</p>
      <Header as="h3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">
          Promises
        </a>
      </Header>
      <CodeSnippet codeSnippet={codeSnippet1} />
      <Header as="h3">
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function">
          Async/await with a try/catch statement
        </a>
      </Header>
      <CodeSnippet codeSnippet={codeSnippet2} />
      <Header as="h3">Arrays</Header>
      <CodeSnippet codeSnippet={codeSnippet3} />
      <Header as="h3">Copying objects</Header>
      <CodeSnippet codeSnippet={codeSnippet4} />
    </>
  );
};

export default JavascriptExamples;

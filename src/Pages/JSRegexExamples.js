import { Header } from "semantic-ui-react";
import CodeSnippet from "../util/CodeSnippet";

const JSRegexExamples = () => {
  const codeSnippet1 = `
    let string = "Neil Gebhard";
    let regex = /Neil/;
    let result = regex.test(string);
    // result => true
  `;

  const codeSnippet2 = `
    let string = "Neil has a pet cat.";
    let regex = /dog|cat|bird|fish/;
    let result = regex.test(string);
    // result => true
  `;

  const codeSnippet3 = `
    let myString = "Neil Gebhard";
    let regex = /neil gebhard/i;
    let result = regex.test(myString);
    // result => true
  `;

  const codeSnippet4 = `
    let str = "Extract the word 'coding' from this string.";
    let regex = /coding/;
    let result = str.match(regex);
    // result => ['coding']
  `;

  const codeSnippet5 = `
    let str = "Twinkle, twinkle, little star";
    let regex = /twinkle/ig;
    let result = str.match(regex);
    // result => ["Twinkle", "twinkle"]
  `;

  const codeSnippet6 = `
    let str = "Let's have fun with wildcard characters!";
    let regex = /.un/;
    let result = regex.test(str);
    // result => true
  `;

  const codeSnippet7 = `
    let str = "Match all the vowels in this sentence.";
    let regex = /[aeiou]/ig;
    let result = str.match(regex);
    // result => ["a", "a", "e", "o", "e", "i", "i", "e", "e", "e"]
  `;

  const codeSnippet8 = `
    let str = "The quick brown fox jumps over the lazy dog.";
    let regex = /[a-z]/ig;
    let result = str.match(regex);
    // result => ["T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", "g"]
  `;

  const codeSnippet9 = `
    let str = "Blueberry 3.141592653s are delicious.";
    let regex = /[h-s2-6]/ig;
    let result = str.match(regex);
    // result => ["l", "r", "r", "3", "4", "5", "2", "6", "5", "3", "s", "r", "l", "i", "i", "o", "s"]
  `;

  const codeSnippet10 = `
    let str = "3 blind mice.";
    let regex = /[^aeiou0-9]/ig;
    let result = str.match(regex);
    // result => [" ", "b", "l", "n", "d", " ", "m", "c", "."]
  `;

  const codeSnippet11 = `
    let str = "Mississippi";
    let regex = /s+/g;
    let result = str.match(regex);
    // result => ["ss", "ss"]
  `;

  const codeSnippet12 = `
    let str = "Aaaaaargh!"
    let regex = /Aa*/;
    let result = str.match(regex);
    // result => ["Aaaaaa"]
  `;

  const codeSnippet13 = `
    let str = "<h1>Lazy match finds the shortest one</h1>";
    let regex = /<.*?>/;
    let result = str.match(regex);
    // result => ["<h1>"]
  `;

  const codeSnippet14 = `
    let str = "Neil loves soccer!";
    let regex = /^Neil/;
    let result = regex.test(str);
    // result => true  
  `;

  const codeSnippet15 = `
    let str = "Neil loves hiking";
    let regex = /hiking$/;
    let result = regex.test(str);
    // result => true
  `;

  const codeSnippet16 = `
    let str = "Find the length of this string!";
    let regex = /\\w/g;
    let result = str.match(regex).length;
    // result => 25
  `;

  const codeSnippet17 = `
    let str = "How many are not letters of numbers???";
    let regex = /\\W/g;
    let result = str.match(regex).length;
    // result => 9 (There are 6 spaces)
  `;

  return (
    <>
      <Header as="h1" dividing>
        Javascript Regular Expressions
      </Header>
      <p>
        Using the <code>test</code> method
      </p>
      <CodeSnippet codeSnippet={codeSnippet1} />
      <p>
        Using the <code>test</code> method with different possibilities
      </p>
      <CodeSnippet codeSnippet={codeSnippet2} />
      <p>
        Using the <code>test</code> and ignoring case
      </p>
      <CodeSnippet codeSnippet={codeSnippet3} />
      <p>
        Extract patterns using <code>match</code>
      </p>
      <CodeSnippet codeSnippet={codeSnippet4} />
      <p>
        Extract more than one (1) pattern using <code>match</code>
      </p>
      <CodeSnippet codeSnippet={codeSnippet5} />
      <p>
        Match anything using the wildcard character "<code>.</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet6} />
      <p>Match single characters with multiple possibilities</p>
      <CodeSnippet codeSnippet={codeSnippet7} />
      <p>Using character sets to define a range of characters</p>
      <CodeSnippet codeSnippet={codeSnippet8} />
      <p>Match numbers and characters in the same character set</p>
      <CodeSnippet codeSnippet={codeSnippet9} />
      <p>Using negated character sets to avoid matching characters</p>
      <CodeSnippet codeSnippet={codeSnippet10} />
      <p>
        Match characters that occur one or more times using "<code>+</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet11} />
      <p>
        Match characters that occur zero or more times using "<code>*</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet12} />
      <p>
        Match characters with lazy matching (instead of greedy) with "
        <code>*?</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet13} />
      <p>
        Match beginning string patterns with "<code>^</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet14} />
      <p>
        Match ending string patterns with "<code>$</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet15} />
      <p>
        Match all letters and numbers with "<code>\w</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet16} />
      <p>
        Match characters that aren't letters and numbers with "<code>\W</code>"
      </p>
      <CodeSnippet codeSnippet={codeSnippet17} />
    </>
  );
};

export default JSRegexExamples;

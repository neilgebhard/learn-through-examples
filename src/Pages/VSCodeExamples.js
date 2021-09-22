import { Header, Table } from "semantic-ui-react";

const VSCodeExamples = () => {
  return (
    <>
      <Header as="h1" dividing>
        Visual Studio Code
      </Header>
      <p>Visual Studio Code keyboard shortcuts, tips, and tricks. (Mac)</p>
      <Header as="h3">Favorite VS Code extensions</Header>
      <ul>
        <li>Prettier</li>
        <li>Auto Rename Tag</li>
        <li>Color Highlight</li>
        <li>Bracket Pair Colorizer 2</li>
        <li>Live Server</li>
      </ul>
      <Header as="h3">Multi-cursor Editing</Header>
      <Table>
        <Table.Row>
          <Table.Cell>Add a cursor</Table.Cell>
          <Table.Cell>
            <code>shift + option + cmd + arrow key + (highlight text)</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <code>option + left click</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Select all occurences of a string</Table.Cell>
          <Table.Cell>
            <code>shift + cmd + L</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rename all instances of a variable</Table.Cell>
          <Table.Cell>
            <code>f2</code>
          </Table.Cell>
        </Table.Row>
      </Table>

      <Header as="h3">Line Actions</Header>
      <Table>
        <Table.Row>
          <Table.Cell>Copy a line</Table.Cell>
          <Table.Cell>
            <code>shift + option + ⬆️</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <code>shift + option + ⬇️</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Move a line</Table.Cell>
          <Table.Cell>
            <code>option + ⬆️</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Delete a line</Table.Cell>
          <Table.Cell>
            <code>shift + cmd + K</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Comment a line</Table.Cell>
          <Table.Cell>
            <code>comment line</code>
          </Table.Cell>
        </Table.Row>
      </Table>

      <Header as="h3">Misc.</Header>
      <Table>
        <Table.Row>
          <Table.Cell>Use intellisense</Table.Cell>
          <Table.Cell>
            <code>^ + space</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Auto-format code</Table.Cell>
          <Table.Cell>
            <code>shift + option + F</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Code fold (based on indentation)</Table.Cell>
          <Table.Cell>
            <code>option + cmd + [</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <code>option + cmd + ]</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Navigate errors</Table.Cell>
          <Table.Cell>
            <code>F8</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Type check your code </Table.Cell>
          <Table.Cell>
            <code>add "// @ts-check" to top of file</code>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell></Table.Cell>
          <Table.Cell>
            <code></code>
          </Table.Cell>
        </Table.Row>
      </Table>

      <Header as="h3">
        <a href="https://docs.emmet.io/abbreviations/syntax/">Emmet</a>
      </Header>
      <Table>
        <Table.Row>
          <Table.Cell>
            <code>div or p</code>
          </Table.Cell>
          <Table.Cell>element</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>></code>
          </Table.Cell>
          <Table.Cell>child</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>+</code>
          </Table.Cell>
          <Table.Cell>sibling</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>^</code>
          </Table.Cell>
          <Table.Cell>climb up</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>*</code>
          </Table.Cell>
          <Table.Cell>multiply</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>()</code>
          </Table.Cell>
          <Table.Cell>group up</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>#</code>
          </Table.Cell>
          <Table.Cell>id (div#example-id)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>.</code>
          </Table.Cell>
          <Table.Cell>class (div.example-class)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>[attr]</code>
          </Table.Cell>
          <Table.Cell>attribute (input[type="text"])</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>$</code>
          </Table.Cell>
          <Table.Cell>numbering (ul>li.item$*5)</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <code>{}</code>
          </Table.Cell>
          <Table.Cell>add text inside element</Table.Cell>
        </Table.Row>
      </Table>
    </>
  );
};

export default VSCodeExamples;

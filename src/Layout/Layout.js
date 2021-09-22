import { Link } from "react-router-dom";
import { Container, Menu, Segment } from "semantic-ui-react";

const FixedMenuLayout = ({ children }) => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={Link} to="/" header>
          Code Examples
        </Menu.Item>
        <Menu.Item as={Link} to="/react">
          React
        </Menu.Item>
        <Menu.Item as={Link} to="/react-testing">
          React Testing
        </Menu.Item>
        <Menu.Item as={Link} to="/javascript">
          Javascript
        </Menu.Item>
        <Menu.Item as={Link} to="/js-regex">
          JS Regex
        </Menu.Item>
        <Menu.Item as={Link} to="/git">
          Git
        </Menu.Item>
        <Menu.Item as={Link} to="/vs-code">
          VS Code
        </Menu.Item>
      </Container>
    </Menu>

    <Container text fluid style={{ marginTop: "7em" }}>
      {children}
    </Container>

    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "2em 0em" }}
    >
      <Container textAlign="center">
        <p>
          Made with ❤️ by Neil Gebhard. The code is on{" "}
          <a href="https://github.com/neilgebhard/learn-through-examples">
            Github
          </a>
          .
        </p>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;

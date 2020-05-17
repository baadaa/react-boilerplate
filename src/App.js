import React from "react";
import { Route, Link } from "react-router-dom";

const Home = () => <h2>Home</h2>;
const Area1 = () => <h2>Area1</h2>;
const Area2 = () => <h2>Area2</h2>;

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">/</Link>
          </li>
          <li>
            <Link to="/area1">/area1</Link>
          </li>
          <li>
            <Link to="/area2">/area2</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/area1" component={Area1} />
        <Route path="/area2" component={Area2} />
      </>
    );
  }
}

export default App;

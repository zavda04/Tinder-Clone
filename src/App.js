import "./App.css";
import Header from "./Header";
import TinderCards from './TinderCards';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>ChatPage</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;



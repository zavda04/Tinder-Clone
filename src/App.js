import "./App.css";
import Header from "./Header";
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
            <h1>HomePage</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

{
  /* TINDER CARDS */
}
{
  /* Buttons below tinde cards  */
}

{
  /* Chats screen  */
}
{
  /* Individual chat screen  */
}

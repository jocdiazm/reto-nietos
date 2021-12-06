import "./components/Switch";
import "./App.css";
import Switch from "./components/Switch";
import Container from "./components/Container";
import Actions from "./components/Actions";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      {" "}
      <Container>
        <Header>
          <Actions>
            <Switch />{" "}
          </Actions>
        </Header>
      </Container>
    </div>
  );
}

export default App;

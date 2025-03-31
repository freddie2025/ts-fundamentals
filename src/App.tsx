import logo from "./logo.svg";
import "./App.css";
import { addTwoNumbers } from "./modules/addTwoNumbers";
import { getFullName } from "./modules/getFullName";
import {
  MyFirstComponent,
  myFirstComponentFunc,
} from "./components/myfirstcomponent/MyFirstComponent";

function App() {
  console.log(addTwoNumbers(1, 2));
  console.log(getFullName("Frederick", "James", "William"));

  console.log(
    MyFirstComponent({
      message: "Hello World",
    })
  );
  console.log(myFirstComponentFunc());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

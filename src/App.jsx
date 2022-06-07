import "./App.css";
import { ArrayMethods } from "./components/ES6/ArrayMethods";
import ArrowFucntions from "./components/ES6/ArrowFucntions";
import Classes from "./components/ES6/Classes";
import { Destructuring } from "./components/ES6/Destructuring";
import { Modules } from "./components/ES6/Modules";
import { SpreadOperator } from "./components/ES6/SpreadOperator";
import { Variables } from "./components/ES6/Variables";
import HelloWorld from "./components/HelloWorld";

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Classes/>
      <ArrowFucntions/>
      <Variables/>
      <ArrayMethods/>
      {/* <Destructuring/> */}
      <SpreadOperator/>
      <Modules/>
    </div>
  );
}

export default App;

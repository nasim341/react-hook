import { useState } from "react";
import Home from "./pages/Home";
function App() {
const[color,setColor] = useState("red");

  const newcolor = () =>{
    setColor("blue")
  }
  return (
  <div>
    <h1>{color}</h1>
    <button onClick={newcolor}>change</button>
    <Home></Home>
  
  </div>
  );
}

export default App;

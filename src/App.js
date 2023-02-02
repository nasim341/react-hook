import { useState } from "react";

function App() {
  const[color,setColor] = useState("red");

  const newcolor = () =>{
    setColor("blue")
  }
  return (
  <div>
    <h1>{color}</h1>
    <button onClick={newcolor}>change</button>
  </div>
  );
}

export default App;

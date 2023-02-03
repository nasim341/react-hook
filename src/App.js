import { useState } from "react";
import Home from "./pages/Home";//from home
import Banner from "./pages/Banner";

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
    <Banner></Banner>
  
  </div>
  );
}

export default App;

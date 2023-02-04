import { useState } from "react";
import Home from "./pages/Home";//from home
import Banner from "./pages/Banner";
import HomeBanner from "./pages/HomeBanner";

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
    <HomeBanner></HomeBanner>
  </div>
  );
}

export default App;

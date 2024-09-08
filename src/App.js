import React,{useState} from "react";
import Timer from "./Timer/Timer";
function App() {
  const[light,setLight] = useState(false)
  const handleLight = ()=>{
    setLight(!light)
  }
  return (
    <div className="App" style={{backgroundColor:light ? "white" : "black"}}>
      <Timer isLight={light} handleLight={handleLight}/>
    </div>
  );
}

export default App;

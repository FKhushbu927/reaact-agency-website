
import { useState } from "react";
import "./App.css";
function App() {

  const[count, setCount] = useState(0)
  return (
    <>
      <p>hellow world</p>
    
        <button onClick={()=> setCount(count+1)}>test</button>
        <p>{count}</p>


    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';


function App() {

  const [style, setStyle] = useState("col")
  
  const handleClick = () => {
    if (style === "col") {
      setStyle("col-dos");
    } else {
      setStyle("col")
    }
  }

  return (
    <div className={style}>
        <button className="button" onClick={handleClick}> Change Color</button>
    </div>
  );
}

export default App;

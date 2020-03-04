import React from "react";
import "./App.css";

function App() {
  const [valeur, setValeur] = React.useState("");
  return (
    <div>
      <input
        value={valeur}
        onChange={e => setValeur(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}

export default App;

import React from "react";
import IndexOfTable from "./components/IndexOfTable";
import datasource from "./models/datasource";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Index of /petechu</h1>
      <IndexOfTable dataSource={datasource} />
    </div>
  );
}

export default App;

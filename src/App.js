import React from "react";
import DiagramProvider from "./components/DiagramState"; // Correct relative path
import Sidebar from "./components/SideBar";
import Diagram from "./components/Diagram";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <DiagramProvider>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="diagram-area">
          <Diagram />
        </div>
      </DiagramProvider>
    </div>
  );
};

export default App;

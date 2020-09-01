import React from 'react';
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Test from "./Test";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Test />
      <Widgets />
    </div>
  );
}

export default App;

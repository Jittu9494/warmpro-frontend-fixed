import React from "react";
import JobList from "./components/JobList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/logo.png" alt="WarmPro Logo" className="logo" />
        <h1>WarmPro Installer App</h1>
      </header>
      <main>
        <JobList />
      </main>
    </div>
  );
}

export default App;

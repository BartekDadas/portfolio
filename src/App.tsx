import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
import React from "react";

import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;

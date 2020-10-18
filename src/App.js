import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import Movie from "./componentes/Movie/Movie";
import NoutFound from "./componentes/NoutFound/NoutFound";

import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      <Route path="/*" element={<NoutFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header/Header";
import Home from "./componentes/Home/Home";
import Login from "./componentes/Login/Login";
import Movie from "./componentes/Movie/Movie";
import NoutFound from "./componentes/NoutFound/NoutFound";

import UserProvider from "./context";

import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NoutFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;

import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import "./App.css";
import HomePage from "./pages/HomePage";
import CoinPage from "./pages/CoinPage";
import Header from "./components/Header";

const myStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = myStyles();

  return (
    
    <BrowserRouter>
      <div className={classes.App}>
      <Header />

        <Routes>
        <Route path="/" element={<HomePage/> } exact />
        <Route path="/coins/:id" element={<CoinPage /> } exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

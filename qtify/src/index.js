import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage/HomePage";
import AlbumPage from "./Pages/AlbumPage/AlbumPage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/album/:albumId" element={<AlbumPage />} />
      </Routes>
    </App>
  </BrowserRouter>
);

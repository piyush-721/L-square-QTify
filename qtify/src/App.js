import React, { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
// import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { StyledEngineProvider } from "@mui/material/styles";

import { Outlet } from "react-router-dom";
// Outlet is used in React Router v6 to render the child routes (like HomePage, AlbumPage, etc.)
// It acts like a "slot" where nested pages will appear.
// use useOutletContext wherever the data is needed
import {
  fetchFilters,
  fetchNewAlbums,
  fetchSongs,
  fetchTopAlbums,
} from "./api/api";

function App() {
  const [data, setData] = useState({});

  // data will contain topAlbums, newAlbums, songs, genres


  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;
  // destructured what we need from the data 

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }} />
      </StyledEngineProvider>
    </>
  );
}



export default App;

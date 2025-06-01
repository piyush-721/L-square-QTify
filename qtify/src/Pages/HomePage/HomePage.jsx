import React from "react";
import { useOutletContext } from "react-router-dom";
import { fetchFilters } from "../../api/api"; // genres
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { data } = useOutletContext();
  // getting data from app.js
  const { newAlbums, topAlbums, songs, genres } = data;

  // console.log("genres", genres);
  // checking if getting the data 

  return (
    <>
      <Hero />
      <div className={styles.wrapper}>
        {/* passing required data to section.jsx */}
        <Section title="Top Albums" data={topAlbums} type="album" />
        <Section title="New Albums" data={newAlbums} type="album" />
        <Section
          title="Songs"
          data={songs}
          filterSource={fetchFilters}
          type="song"
        />
      </div>
    </>
  );
}

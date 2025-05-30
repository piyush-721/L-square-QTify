import axios from "axios";

const backend = {
  endpoint: "https://qtify-backend-labs.crio.do",
};

export const fetchTopAlbums = async () => {
  try {
    const response = await axios.get(`${backend.endpoint}/albums/top`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const response = await axios.get(`${backend.endpoint}/albums/new`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchSongs = async () => {
  try {
    const response = await axios.get(`${backend.endpoint}/songs`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchFilters = async () => {
  try {
    const response = await axios.get(`${backend.endpoint}/genres`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};

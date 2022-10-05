import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50"
  },
  headers: {
    "X-RapidAPI-Key": "708b81dbd5mshad536dc7add99fep1f6167jsn49e641a2f743",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com"
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

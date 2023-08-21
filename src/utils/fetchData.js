export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f42922c9bmshe92951410504dc8p1b8c76jsne50743a8039b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4f42922c9bmshe92951410504dc8p1b8c76jsne50743a8039b",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

const { PavilionCMS } = require("./dist");

const client = new PavilionCMS({
  apiKey:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTMzZDAxMTVlZTRiOGJiNjBiNGUxNmQ5YzdkMmRkYSIsInN1YiI6IjYzZDExNGJmZTcyZmU4MDA4NDkwYTc5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Rv4lUaHboZi8dovX88VRSRiJvcJR8xYQL-ghLC1wEDg",
});

client.tags
  .all()
  .then((data) => console.log(data))
  .catch((err) => console.log("Error", err));

// this is sample code to test the PavilionCMS API

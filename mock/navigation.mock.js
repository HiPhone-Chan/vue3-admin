const data = require("./data/navigation.data.json");

export default [
  {
    url: `${process.env.VUE_APP_API_BASE}/api/navigation/trees`,
    method: "GET",
    response: () => data
  }
];

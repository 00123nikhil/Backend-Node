const PORT = process.env.PORT || 5000;

// export app
const app = require("./app");


app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT} `)
);

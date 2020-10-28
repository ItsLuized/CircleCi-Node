const app = require("./app");
const port = 80


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
const express = require('express');
const app = express();
const PORT = 8002;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/fetchData', (req, res) => {
  res.json('hello from server');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));

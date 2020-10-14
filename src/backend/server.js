const express = require('express');
const app = express();
const PORT = 8002;

const toggledStatus = { notDone: 'doing', doing: 'done', done: 'notDone' };

app.use(express.json());

app.locals.db = {
  title: 'Todo',
  id: 2,
  items: [{ id: 1, title: 'Fill timesheets', status: 'notDone' }],
};

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get('/api/initialize', (req, res) => res.json(req.app.locals.db));

app.post('/api/updateTitle', (req, res) => {
  req.app.locals.db.title = req.body.title;
  res.json(req.app.locals.db);
});

app.post('/api/addItem', (req, res) => {
  const title = req.body.title;
  const { db } = req.app.locals;
  db.items = db.items.concat([{ id: db.id, title, status: 'notDone' }]);
  db.id += 1;
  res.json(req.app.locals.db);
});

app.post('/api/removeItem', (req, res) => {
  const itemId = req.body.id;
  const { db } = req.app.locals;
  db.items = db.items.filter(({ id }) => id !== itemId);
  res.json(req.app.locals.db);
});

app.post('/api/updateItem', (req, res) => {
  const itemId = req.body.id;
  const { db } = req.app.locals;
  const item = db.items.find((item) => item.id === itemId);
  item.status = toggledStatus[item.status];
  res.json(req.app.locals.db);
});

app.get('/api/reset', (req, res) => {
  req.app.locals.db = { id: 1, title: 'Todo', items: [] };
  res.json(req.app.locals.db);
});
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));

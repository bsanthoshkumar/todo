const post = (body) => ({
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(body),
  method: 'POST',
});

const TodoAPI = {
  initialize: () => fetch('/api/initialize').then((res) => res.json()),
  updateTitle: (text) =>
    fetch('/api/updateTitle', post({ title: text })).then((res) => res.json()),
  addItem: (text) =>
    fetch('/api/addItem', post({ title: text })).then((res) => res.json()),
  removeItem: (id) =>
    fetch('/api/removeItem', post({ id })).then((res) => res.json()),
  updateItem: (id) =>
    fetch('/api/updateItem', post({ id })).then((res) => res.json()),
  reset: () => fetch('/api/reset').then((res) => res.json()),
};

export default TodoAPI;

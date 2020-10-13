const addItem = ({ title, nextId, items }, text) => {
  const newItems = items.concat([
    { id: nextId, title: text, status: 'notDone' },
  ]);
  return { title, nextId: nextId + 1, items: newItems };
};

const removeItem = ({ title, nextId, items }, itemId) => {
  const newItems = items.filter(({ id }) => id !== itemId);
  return { title, nextId, items: newItems };
};

const updateItem = ({ title, nextId, items }, itemId) => {
  const newItems = items.map((item) => Object.assign({}, item));
  const item = newItems.find((item) => item.id === itemId);
  item.status = { notDone: 'doing', doing: 'done', done: 'notDone' }[
    item.status
  ];
  return { title, nextId, items: newItems };
};

const initialState = { title: 'Todo', nextId: 1, items: [] };

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return { title: action.text, nextId: state.nextId, items: state.items };
    case 'ADD_ITEM':
      return addItem(state, action.text);
    case 'REMOVE_ITEM':
      return removeItem(state, action.id);
    case 'UPDATE_ITEM':
      return updateItem(state, action.id);
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export { todoReducer, initialState };

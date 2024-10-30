import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import TodoApp from './TodoApp';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

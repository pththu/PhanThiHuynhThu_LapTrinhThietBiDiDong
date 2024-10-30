import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import Todo from './Todo';
import store from './store';

export default function App() {
  return (
   <Provider store={store}>
      <Todo />
    </Provider>
  );
}


import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    dispatch({ type: 'FETCH_TODOS' });
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.todo}>{item.title}</Text>
        )}
      />
      <Button title="Fetch Todos" onPress={() => dispatch({ type: 'FETCH_TODOS' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20 },
  todo: { fontSize: 18, padding: 10, borderWidth: 1, },
});

export default TodoApp;

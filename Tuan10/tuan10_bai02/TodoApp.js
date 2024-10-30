import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, removeTodo } from './todosSlice';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.todos);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = { id: Date.now(), title: newTodo };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todo}>{item.title}</Text>
            <Button title="Remove" onPress={() => handleRemoveTodo(item.id)} />
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add new todo"
      />
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  title: { 
    fontSize: 24,
    marginBottom: 20 
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10,
    borderRadius: 7,
    borderColor: 'grey'
  },
  todoContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    borderWidth: 1, 
    padding: 10, 
    borderRadius: 4, 
    marginVertical: 5
  },
  todo: { 
    fontSize: 15,
  },
});

export default TodoApp;

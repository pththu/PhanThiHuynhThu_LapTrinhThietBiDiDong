// TodoApp.js
import React, { useEffect, useState, useMemo  } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput,
TouchableOpacity, Image } from 'react-native';
import { useRecoilState } from 'recoil';
import { todosAtom } from './todoAtom';
import axios from 'axios';

const TodoApp = () => {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://6718368ab910c6a6e02b5c0c.mockapi.io/todo'); 
        setTodos(response.data);
      } catch (error) {
        console.error('Failed to fetch todos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, [setTodos]);

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = { id: Date.now(), title: newTodo, completed: false }; 
      setTodos(prevTodos => [...prevTodos, todo]);
      setNewTodo('');
    }
  };

 const handleRemoveTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const filteredTodos = useMemo(() => {
    return todos.filter(todo => 
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [todos, searchTerm]);

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.vAdd}>
        
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={setNewTodo}
          placeholder="Inter title new todo"
        />
        <TouchableOpacity 
          onPress={handleAddTodo}
          style={styles.btnAdd}>
          <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.vSearch}>
        <Image 
          style={styles.img}
          source={require('./assets/icons8-find-50.png')}/>
        <TextInput
          style={styles.inputSearch}
          value={searchTerm}
          onChangeText={setSearchTerm}
          placeholder="Inter title todo"
        />
      </View>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={filteredTodos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.todoContainer}>
              <Text style={styles.todo}>{item.title}</Text>
              <TouchableOpacity
                style={styles.btnRemove}
                onPress={() => handleRemoveTodo(item.id)} 
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>No todos found</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '70%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: 'grey',
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginVertical: 5,
  },
  todo: {
    fontSize: 15,
  },
  btnAdd: {
    width: '25%',
    paddingVertical: 10,
    backgroundColor: '#00FF66',
    borderRadius: 5,
  },
  btnRemove: {
    padding: 10,
    backgroundColor: '#FF6666',
    borderRadius: 5,
  }, 
  vAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }, 
  vSearch: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    borderColor: 'grey',
  },
  inputSearch: {
    width: '100%',
  },
  img: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  }
});

export default TodoApp;

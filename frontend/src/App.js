import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), completed: false}]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <TodoForm onAdd={addTodo} />
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </Box>
      </Container>
    </>
  );
}

export default App;

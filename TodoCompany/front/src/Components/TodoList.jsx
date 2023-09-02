import React, { useState } from 'react';
import { VStack, Input, Button, Box, Grid } from '@chakra-ui/react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    // Add more initial todos as needed.
  ]);
  
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      const newTodo = {
        id: Date.now(), // You can use a better method to generate IDs.
        text: newTodoText,
      };
      setTodos([...todos, newTodo]);
      setNewTodoText('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <VStack
      spacing={4}
      bgGradient="linear(to-r, orange.200, blue.400)"
      height={'full'}
    >
      <Box w={['90%', '80%', '70%', '60%', '50%']} borderRadius="md" p={4}>
        <form action="" onSubmit={handleAddTodo}>
          <Input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new TODO"
            maxLength={10}
          />
          <Button onClick={handleAddTodo} colorScheme="teal" mt={2} isFullWidth>
            Add Todo
          </Button>
        </form>
      </Box>
      <Grid
        width={'70%'}
        gridTemplateColumns={[
          'repeat(1,1fr)',
          'repeat(1,1fr)',
          'repeat(2,1fr)',
          'repeat(3,1fr)',
        ]}
        gap={10}
      >
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </Grid>
    </VStack>
  );
};

export default TodoList;

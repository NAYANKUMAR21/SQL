import React, { useEffect, useState } from 'react';
import {
  VStack,
  Input,
  Button,
  Box,
  Grid,
  Stack,
  Skeleton,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getSingleUserTodo } from '../Redux/Actions/TodoActions';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    // Add more initial todos as needed.
  ]);
  const { data, laoding } = useSelector((state) => state.Todo);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  console.log(data);
  const handleAddTodo = (e) => {
    dispatch(addTodo(newTodoText)).then((res) => {
      dispatch(getSingleUserTodo());
    });
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
  useEffect(() => {
    dispatch(getSingleUserTodo());
  }, []);
  if (laoding) {
    return (
      <Stack>
        <Skeleton height="50px" />
        <Skeleton height="50px" />
        <Skeleton height="50px" />
      </Stack>
    );
  }
  return (
    <VStack
      spacing={4}
      bgGradient="linear(to-r, orange.200, blue.400)"
      height={'full'}
    >
      <Box w={['90%', '80%', '70%', '60%', '50%']} borderRadius="md" p={4}>
        <form action="" onSubmit={handleAddTodo}>
          <Input
            color={'white'}
            fontSize={'xl'}
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
        {data.length !== 0 &&
          data?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
          ))}
      </Grid>
    </VStack>
  );
};

export default TodoList;

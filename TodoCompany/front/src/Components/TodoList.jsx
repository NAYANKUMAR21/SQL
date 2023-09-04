import React, { useEffect, useState } from 'react';
import {
  VStack,
  Input,
  Button,
  Box,
  Grid,
  Stack,
  Skeleton,
  Spinner,
  Flex,
  useToast,
  Center,
  GridItem,
} from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, getSingleUserTodo } from '../Redux/Actions/TodoActions';

const TodoList = () => {
  const toast = useToast();
  const [todos, setTodos] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    // Add more initial todos as needed.
  ]);
  const { data, loading } = useSelector((state) => state.Todo);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  console.log(data);
  const handleAddTodo = (e) => {
    if (!newTodoText) {
      return toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }

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
  // if (loading) {
  //   return (
  //     <Stack>
  //       <Skeleton height="50px" />
  //       <Skeleton height="50px" />
  //       <Skeleton height="50px" />
  //     </Stack>
  //   );
  // }
  return (
    <VStack
      // p={10}

      // spacing={4}
      bgGradient="linear(to-r, orange.200, blue.400)"
      // height={'full'}
    >
      <Box w={['90%', '80%', '70%', '60%', '50%']} borderRadius="md" p={4}>
        <form onSubmit={handleAddTodo}>
          <Input
            color={'white'}
            fontSize={'xl'}
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Add a new TODO"
          />
          <Button
            onClick={handleAddTodo}
            color="white"
            bgColor={'blue.400'}
            mt={2}
            isFullWidth
            _hover={{
              bgColor: 'orange',
            }}
          >
            Add Todo
          </Button>
        </form>
      </Box>
      {!loading ? (
        <Box w={['100%', '100%', '100%', '60%']}>
          {!loading ? (
            data?.map((todo, index) => (
              <Box
                w="100%"
                key={index}
                mt="15px"
                _hover={{
                  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                }}
              >
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDeleteTodo}
                />
              </Box>
            ))
          ) : (
            <Center justifyContent="center" alignItems="center">
              <Spinner
                m={'auto'}
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
          )}
        </Box>
      ) : (
        <Center justifyContent="center" alignItems="center">
          <Spinner
            m={'auto'}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      )}
    </VStack>
  );
};

export default TodoList;

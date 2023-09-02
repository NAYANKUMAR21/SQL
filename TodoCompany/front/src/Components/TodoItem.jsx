import React, { useState } from 'react';
import { Box, Text, IconButton, Flex } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import EditTodoModal from './EditTodoModal';

const TodoItem = ({ todo, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDelete(todo.id);
  };

  return (
    <Box
      //   bgGradient="linear(to-r, blue.200, red.100)"
      boxShadow={'md'}
      background={'white'}
      borderRadius="md"
      p={3}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
    >
      {isEditing ? (
        <EditTodoModal todo={todo} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <Box width={['90%', '80%', '70%', '60%', '50%']}>
            <Text fontSize="lg" fontWeight="bold" mr={2}>
              {todo.text}
            </Text>
          </Box>
          <Flex>
            <IconButton
              icon={<EditIcon />}
              onClick={handleEditClick}
              variant="ghost"
              colorScheme="teal"
              aria-label={`Edit ${todo.text}`}
              size="sm"
            />
            <IconButton
              icon={<DeleteIcon />}
              onClick={handleDeleteClick}
              variant="ghost"
              colorScheme="red"
              aria-label={`Delete ${todo.text}`}
              size="sm"
            />
          </Flex>
        </>
      )}
    </Box>
  );
};

export default TodoItem;

import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { getSingleUserTodo, patchTodo } from '../Redux/Actions/TodoActions';

const EditTodoModal = ({ todo, onClose }) => {
  const [editedText, setEditedText] = useState(todo.title);

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };
  const dispatch = useDispatch();
  const handleSave = () => {
    // Implement your save logic here, e.g., update the todo with the new text.
    // For simplicity, we'll just log the new text here.
    console.log(`Edited text: ${editedText}`);
    onClose();
    console.log(editedText);
    return dispatch(patchTodo(todo._id, editedText)).then((res) =>
      dispatch(getSingleUserTodo())
    );
  };

  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Todo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            size={['sm', 'md', 'lg']}
            value={editedText}
            onChange={handleTextChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSave} colorScheme="teal">
            Save
          </Button>
          <Button onClick={onClose} variant="ghost">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTodoModal;

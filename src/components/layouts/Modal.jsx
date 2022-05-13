import React, { useContext } from 'react';
import Modal from 'react-modal';
import TodoContext from '../../context/todos/todoContext';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AddTodo from './AddTodo';

Modal.setAppElement('#root');
const ModalComponent = () => {
  const { modalOpen, toggleModal } = useContext(TodoContext);

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => toggleModal()}
      style={{ content }}>
      <AiOutlineCloseCircle
        size={30}
        style={{ color: 'red', cursor: 'pointer', float: 'right' }}
        onClick={toggleModal}
      />

      <AddTodo />
    </Modal>
  );
};

export default ModalComponent;

// Modal styles
const content = {
  margin: '0px auto',
  maxWidth: '850px',
  height: '400px',
};

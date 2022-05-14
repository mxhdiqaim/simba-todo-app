import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import AddTodo from './AddTodo';

// To get rid of the warning in the console
Modal.setAppElement('#root');
const ModalComponent = ({ modalOpen, toggleModal }) => {
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

// PropTypes
ModalComponent.prototype = {
  modalOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

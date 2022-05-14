import React, { useContext } from 'react';
import Header from '../layouts/Header';
import ModalComponent from '../layouts/Modal';
import Todos from '../layouts/Todos';
import TodoContext from '../../context/todos/todoContext';

const Home = () => {
  const { modalOpen, toggleModal } = useContext(TodoContext);

  return (
    <div className='container'>
      <Header toggleModal={toggleModal} />
      <Todos />
      <ModalComponent modalOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../layouts/Header';
import Todos from '../layouts/Todos';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Todos />
    </div>
  );
};

export default Home;

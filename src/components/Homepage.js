import React from 'react';
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import Loading from './Loading';
import { useGlobalContext } from '../utils/context';
import Submenu from './Submenu';

const Homepage = () => {
  const { loading } = useGlobalContext();
  if (loading) return <Loading />;

  return (
    <main style={{ position: 'relative' }}>
      <Navbar />
      <Submenu />
      <CartContainer />
    </main>
  );
};

export default Homepage;

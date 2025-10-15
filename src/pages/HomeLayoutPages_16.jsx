import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar_16';
import Navbar_16 from '../components/Navbar_16';

const HomeLayoutPages_16 = () => {
  return (
    <>
      <Navbar_16 />
      <Outlet />
    </>
  );
};

export default HomeLayoutPages_16;

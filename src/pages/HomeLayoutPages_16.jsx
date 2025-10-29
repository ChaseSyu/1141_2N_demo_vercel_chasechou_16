import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar_16';
import Navbar_16 from '../components/Navbar_16';
import Wrapper from '../assets/wrappers/Blog2_16';

const HomeLayoutPages_16 = () => {
  return (
    <Wrapper>
      <Navbar_16 />
      <Outlet />
    </Wrapper>
  );
};

export default HomeLayoutPages_16;

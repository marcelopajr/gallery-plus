import { Outlet } from 'react-router';
import MainHeader from '../components/main-header';

export default function LayoutMain() {
  return (
    <>
      <MainHeader className="my-6" />
      <hr />
      <Outlet />
    </>
  );
}

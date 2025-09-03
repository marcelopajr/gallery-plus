import { Outlet } from 'react-router';
import MainHeader from '../components/main-header';
import MainContent from '../components/main-content';

export default function LayoutMain() {
  return (
    <>
      <MainHeader className="my-6" />

      <MainContent>
        <Outlet />
      </MainContent>
    </>
  );
}

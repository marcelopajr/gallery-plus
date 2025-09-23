import { BrowserRouter, Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LayoutMain from './pages/layout-main';
import PageHome from './pages/page-home';
import PagePhotoDetails from './pages/page-photo-details';
import PageComponents from './pages/page-components';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutMain />}>
            <Route index element={<PageHome />} />
            <Route path="/photos/:id" element={<PagePhotoDetails />} />
            <Route path="/components" element={<PageComponents />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

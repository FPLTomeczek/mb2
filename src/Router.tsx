import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './Pages/index';

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomePage />,
   },
]);

export default function Router() {
   return <RouterProvider router={router} />;
}

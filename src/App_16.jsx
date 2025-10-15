import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_16,
  HomePage_16,
  BlogStaticPage_16,
  BlogLocalJsonPage_16,
  BlogNodePage_16,
  BookListPage_16,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayoutPage_16 />,
    children: [
      {
        index: true,
        element: <HomePage_16 />,
      },
      {
        path: 'static_16',
        element: <BlogStaticPage_16 />,
      },
      {
        path: 'localJson_16',
        element: <BlogLocalJsonPage_16 />,
      },
      {
        path: 'node_16',
        element: <BlogNodePage_16 />,
      },
      {
        path: 'booklist_16',
        element: <BookListPage_16 />,
      },
    ],
  },
]);

const App_16 = () => {
  return <RouterProvider router={router} />;
};

export default App_16;

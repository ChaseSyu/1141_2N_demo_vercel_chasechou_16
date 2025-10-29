import { createBrowserRouter, RouterProvider } from 'react-router';

import {
  HomeLayoutPage_16,
  HomePage_16,
  BlogStaticPage_16,
  BlogLocalJsonPage_16,
  BlogLocalJsonPage2_16,
  BlogNodePage_16,
  BookListPage_16,
  BlogSupaPage_16,
} from './pages';

import {
  T11_ErrorExamplePage_16,
  T12_UseStateBasicPage_16,
} from './pages/tutorials';

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
        path: 'localJson2_16',
        element: <BlogLocalJsonPage2_16 />,
      },
      {
        path: 'node_16',
        element: <BlogNodePage_16 />,
      },
      {
        path: 'supa_16',
        element: <BlogSupaPage_16 />,
      },
      {
        path: 'booklist_16',
        element: <BookListPage_16 />,
      },
    ],
  },
  {
    path: '/tutorials',
    element: <HomeLayoutPage_16 />,
    children: [
      {
        index: true,
        element: <HomePage_16 />,
      },
      {
        path: 't11_16',
        element: <T11_ErrorExamplePage_16 />,
      },
      {
        path: 't12_16',
        element: <T12_UseStateBasicPage_16 />,
      },
    ],
  },
]);

const App_16 = () => {
  return <RouterProvider router={router} />;
};

export default App_16;

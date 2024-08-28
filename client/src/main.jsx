import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import ShowBookDetails from './components/ShowBookDetails';
import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import UpdateBookInfo from './components/UpdateBookInfo';

const router = createBrowserRouter([
  {path: "/", element: <ShowBookList />},
  {path: "/create-book", element: <CreateBook />},
  {path: "/show-book/:id", element: <ShowBookDetails />},
  {path: "/edit-book/:id", element: <UpdateBookInfo />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

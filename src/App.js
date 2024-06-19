import './App.css';
import Navbar from './Components/navbar';
import { Provider } from 'react-redux';
import { useEffect, useState } from 'react';
import store from './utils/store';
import Container from './Components/container';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favourite from './Components/favourite';
function App() {
  const [theme, settheme] = useState(true)

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [theme])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar mode={[theme, settheme]} />,
      children: [
        {
          path: "/",
          element: <Container />,
        },
        {
          path: "/favourite",
          element: <Favourite />,
        },
      ],
    },

  ]);

  return (
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  );
}



export default App;

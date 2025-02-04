import React, {lazy, Suspense, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from './utilities/UserContext'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Instamart = lazy(() =>  import('./components/Instamart'));

const App = () => {
  const [userName, setUserName] = useState('Eswar');

  useEffect(() => {
    // Make api cal and get data 
    const data = {
      name: "Eswar"
    };
    setUserName(data.name);
  },[])

  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </UserContext.Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/instamart",
        element: <Suspense fallback={(<h1>Loading...</h1>)}><Instamart/></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }   
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
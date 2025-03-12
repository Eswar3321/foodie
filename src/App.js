import React, {lazy, Suspense, useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'

import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from './utilities/UserContext'
import appStore from './utilities/appStore'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Instamart = lazy(() =>  import('./components/Instamart'));

const App = () => {
  const [userName, setUserName] = useState('Eswar');

  useEffect(() => {
    // Make api cal and get data 
    const data = {
      name: "User"
    };
    setUserName(data.name);
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div className="max-w-[1440px] m-auto">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/cart",
        element: <Cart />
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
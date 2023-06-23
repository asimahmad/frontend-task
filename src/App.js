import './App.css';
import Login from './Components/login'
import React, {lazy,useState, Suspense} from 'react';
import {createBrowserRouter, Outlet} from 'react-router-dom'
import Error from './Components/Error'
import SignUp from './Components/SignUp'
import ForgotPassword from './Components/ForgotPassword'
import Shimmer from './Components/Shimmer';

const Home = lazy(()=> import('./Components/Home'));
export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element:<Suspense fallback={<Shimmer/>}><Home/></Suspense>,
        errorElement: <Error />,
      },
      {
        path:'/login',
        element:<Login/>,
        errorElement: <Error />,
      },
      {
        path:'/signup',
        element:<SignUp/>,
        errorElement: <Error />,
      },
      {
        path:'/forgotpassword',
        element:<ForgotPassword />,
        errorElement: <Error />,
      },
      {
        path:'/home',
        element:<Suspense fallback={<Shimmer/>}><Home/></Suspense>,
        errorElement: <Error/>
      }
    ]
  }
])

function App() {

  return (
    <div className="App">
     <Outlet/>
    </div>
  );
}


export default App;

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Login, Register, Error, CreatePost, DashboardLayout, AllPosts, Dashboard } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'posts',
            element: <AllPosts/>
          },
          {
            path: 'create-post',
            element: <CreatePost/>
          }
        ]
      }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

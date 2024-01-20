import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Login,
  Register,
  Error,
  CreatePost,
  DashboardLayout,
  AllPosts,
  Dashboard,
  SinglePost,
  EditPost
} from "./pages";
import PrivateRoute from "./components/ProtectRoute";

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
        path: '/:title',
        element: <SinglePost/>
      },
      {
        path: "dashboard",
        element: <PrivateRoute>
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        </PrivateRoute>,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "posts",
            element: <AllPosts />,
          },
          {
            path: "create-post",
            element: <CreatePost />,
          },
          {
            path: 'edit/:id',
            element: <EditPost />
          }
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

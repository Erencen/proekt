import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";
import SignUpPage from "./components/pages/SignUpPage";
import ProtectedRouter from "./components/HOCs/ProtectedRouter";
import useUser from "./hooks/useUser";
import LoginPage from "./components/pages/LoginPage";
function App() {
  const { logoutHandler, loginHandler, signUpHandler, user } = useUser();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: "/",
          element: <MainPage user={user} />,
        },
        {
          path: "/my-xs",
          element: (
            <ProtectedRouter
              isAllowed={user.status === "logged"}
              redirect="/auth/login"
            ></ProtectedRouter>
          ),
        },
        {
          element: <ProtectedRouter isAllowed={user.status !== "logged"} />,
          children: [
            {
              path: "/auth/signup",
              element: <SignUpPage signUpHandler={signUpHandler} />,
            },
            {
              path: "/auth/login",
              element: <LoginPage loginHandler={loginHandler} />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

import { PATH } from "../constants/config";
import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const router = [
  {
    path: "/",
    //   element: <CustomerLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.REGISTER,
        element: <RegisterPage />,
      },
      // {
      //   path: PATH.FORGOTPASSWORD,
      //   element: <ForgotPassword />,
      // },
      // {
      //   path: PATH.RESETPASSWORD,
      //   element: <ResetPassword />,
      // },
    ],
  },
];

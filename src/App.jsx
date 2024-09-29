import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Login from "./Components/Login/Login.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import LearningCenter from "./Components/LearningCenter/LearningCenter.jsx";
import Budgeting from "./Components/Budgeting/Budgeting.jsx";
import Finance from "./Components/Finance/Finance.jsx";
import Pie from "./Components/Pie/Pie.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Chat from "./Components/AI/Chat.jsx";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/signup",
    element: (
      <div>
        <SignUp />
      </div>
    ),
  },
  {
    path: "/login",
    element: (
      <div>
        <Login />
      </div>
    ),
  },
  {
    path: "/Home",
    element: (
      <div>
        <ProtectedRoute>
          <LanguageSwitcher />
          <Budgeting />
          <Pie />
          <Finance />
          <LearningCenter />
          <Chat />
        </ProtectedRoute>
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

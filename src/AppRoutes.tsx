import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";


import ProtectedRoute from "./Auth/ProtectedRoute";


const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/main"
        element={
          <ProtectedRoute>
            <Layout>
              <MainPage />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route path="/signin" element={<SigninPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route path="/*" element={<Navigate to="/"/>} />
    </Routes>
  );
};

export default AppRoutes;

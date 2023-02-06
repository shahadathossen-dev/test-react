import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/Layouts/AppLayout";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/"
            element={!user ? <Navigate to="/register" /> : <Welcome />}
          />
          <Route
            path="/profile"
            element={!user ? <Navigate to="/register" /> : <Profile />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

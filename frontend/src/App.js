import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import Home from "./pages/Home"
import Nav from './components/Nav/Nav';
import { getCookie } from "./api/csrf";
import { AuthProvider } from "./context/AuthContext";


function App() {
  useEffect(() => {
    const fetchToken = async () => {
      const token = getCookie("csrftoken"); 
      if (token) {
        localStorage.setItem("csrftoken", token);
      } else {
        console.warn("No se encontró la cookie csrftoken");
      }
    };
    fetchToken();
  }, []);

  return (
    <AuthProvider>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

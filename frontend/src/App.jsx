import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally validate token with the backend
      setUser({ loggedIn: true });
    }
    setLoading(false); // Mark loading as complete
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/login'; // Redirect to login on logout
  };

  if (loading) {
    return <div>Loading...</div>; // Prevent rendering until auth check is done
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navbar onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard setUser={setUser} /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login setUser={setUser} /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!user ? <Register /> : <Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
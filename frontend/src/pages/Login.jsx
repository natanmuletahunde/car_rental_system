import { useState } from 'react';
import axios from 'axios';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        setUser({ loggedIn: true }); // Sync user state
        window.location.href = '/dashboard';
      } else {
        setError('No token received from server');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="w-full bg-coffee text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
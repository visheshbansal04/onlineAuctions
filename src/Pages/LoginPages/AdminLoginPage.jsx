import React, { useState } from 'react';
import Layout from '../../Layout/Layout';
import api from '../../utils/apiUtils';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', {
        email,
        password,
        role: 'admin',
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('role', 'admin');
      navigate('/');
    } catch (e) {
      console.log(e);
      alert('Invalid Credentials');
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 p-3 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 rounded-md text-lg font-medium hover:bg-teal-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default AdminLoginPage;

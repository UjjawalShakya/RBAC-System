import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './styles.css';

const AuthForm = ({ isLogin, setView }) => {
  const { users, addUser, setCurrentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: '', id: '', password: '' });
  const [error, setError] = useState('');
  const [showTable, setShowTable] = useState(false); // Controls table visibility

  const handleAction = () => {
    if (!formData.id || !formData.password || (!isLogin && !formData.name)) {
      setError('All fields are required');
      return;
    }

    if (isLogin) {
      const user = users.find(
        (u) => u.id === formData.id && u.password === formData.password
      );
      if (user) {
        setCurrentUser(user);
        setView('dashboard');
        setShowTable(true); // Show table on successful login
      } else {
        setError('Invalid credentials');
      }
    } else {
      if (users.some((u) => u.id === formData.id)) {
        setError('User ID already exists');
        return;
      }
      addUser({ ...formData, role: 'viewer' });
      setFormData({ name: '', id: '', password: '' });
      setShowTable(true); // Show table after signup
    }
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Login' : 'Signup'}
      </h2>
      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        )}
        <input
          type="text"
          placeholder="Enter user ID"
          value={formData.id}
          onChange={(e) => setFormData({ ...formData, id: e.target.value })}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {error && <div className="error-message">{error}</div>}
        <button type="button" onClick={handleAction}>
          {isLogin ? 'Login' : 'Signup'}
        </button>
        <button
          type="button"
          className="back-button"
          onClick={() => setView('welcome')}
        >
          Back
        </button>
      </form>

      {/* Render the table conditionally */}
      {showTable && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">All Signed-Up Users:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>User ID</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.id}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AuthForm;

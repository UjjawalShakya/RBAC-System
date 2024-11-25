import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import './styles.css';

const Dashboard = ({ setView }) => {
  const { users, currentUser, updateUserRole, deleteUser } = useContext(UserContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl">
      <h2 className="text-2xl font-bold mb-4">User Management Dashboard</h2>
      <div className="text-xl mb-4">
        Welcome, {currentUser.name} (Role: {currentUser.role})
      </div>
      <button
        onClick={() => setView('welcome')}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
      >
        Logout
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">User ID</th>
            <th className="border p-2">Role</th>
            {currentUser.role === 'admin' && <th className="border p-2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border p-2">{user.name}</td>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.role}</td>
              {currentUser.role === 'admin' && (
                <td className="border p-2">
                  <div className="flex space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      onClick={() =>
                        updateUserRole(user.id, user.role === 'admin' ? 'viewer' : 'admin')
                      }
                    >
                      Toggle Role
                    </button>
                    {user.role !== 'admin' && (
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => deleteUser(user.id)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
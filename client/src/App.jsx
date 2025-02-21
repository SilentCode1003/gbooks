import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users/getusers')
      .then(response => response.json())
      .then(data => {
        if (data.message === "SUCCESS") {
          setUsers(data.data); 
        } else {
          console.error('Error fetching users:', data.message);
        }
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container">
      <h2>Users</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Employee ID</th>
              <th>Full Name</th>
              <th>Position</th>
              <th>Username</th>
              <th>Access</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.mu_id}>
                <td>{user.mu_id}</td>
                <td>{user.mu_employee_id}</td>
                <td>{user.mu_fullname}</td>
                <td>{user.mu_position}</td>
                <td>{user.mu_username}</td>
                <td>{user.mu_access}</td>
                <td>{user.mu_status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

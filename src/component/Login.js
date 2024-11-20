import { useState } from "react";
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Successfully Logged in');
        setUsername('');
        setPassword('');
    }

    return (
        <div className="container mt-5">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group mb-3">
                    <label>User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block form-control ">Login</button>
                <p className="mt-3">
                    Not an Employee yet? <Link to="/employeeForm" className="text-decoration-none">Create Employee</Link>
                </p>
            </form>
        </div>
    )
}

export default Login;

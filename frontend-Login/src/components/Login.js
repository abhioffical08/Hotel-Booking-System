import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Style/Login.css';

const Login = () => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        // Basic form validation
        if (!phone || !password) {
            setMessage('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/auth/login', {
                phone,
                password,
            });

            setMessage('Login successful!');
            localStorage.setItem('token', response.data.token);
            navigate('/http://localhost:3001/');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login failed');
        } finally {
            setLoading(false);
            // Clear the message after 3 seconds
            setTimeout(() => setMessage(''), 3000);
        }
    };

    return (
        <div className="glow">
            <div className="login-container" id="glow">
                <h2 id='L'>Login</h2>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="phone">Phone :</label>
                        <input
                            type="phone"
                            id="phone-l"
                            placeholder='+91 99X XXX XXX'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password :</label>
                        <input
                            type="password"
                            id="password-l"
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>

                    <div className="check">
                        <input type="checkbox" id="login-check" />
                        <label htmlFor="login-check"> Remember Me</label>
                    </div>

                    <label className="lab">Don't have an account?</label>
                    <Link to="/register" className="register-link">
                        <button className="btn" id="main" type="button">Register</button>
                    </Link>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
};

export default Login;

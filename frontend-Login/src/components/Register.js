import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Style/Register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [termsError, setTermsError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (phone) => phone.length >= 10 ;

    const validatePassword = (password) => password.length >= 8;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setTermsError('');

        if (!username || !phone || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (!validateEmail(phone)) {
            setError('Please enter a valid phone address');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!acceptTerms) {
            setTermsError('You must accept the Terms & Conditions');
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/auth/register', {
                username,
                phone,
                password
            });
            setSuccess(response.data.message);
            setUsername('');
            setPhone('');
            setPassword('');
            setConfirmPassword('');
            setAcceptTerms(false);
            navigate('/Login');
        } catch (error) {
            setError(error.response?.data?.message || 'Registration failed');
        } finally {
            setLoading(false);
            setTimeout(() => setSuccess(''), 3000);
        }
    };

    return (
        <div className="auth-container">
            <h2 id='R'>Register</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                        aria-describedby="username-error"
                    />
                </div>
                <div>
                    <label htmlFor="phone">phone:</label>
                    <input
                        id="phone-r"
                        type="text"
                        placeholder='+91 99X XXX XXX'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        disabled={loading}
                        aria-describedby="phone-error"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password-r"
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        aria-describedby="password-error"
                    />
                </div>
                <div>
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        id="confirm-password"
                        type="password"
                        placeholder='confirm password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        disabled={loading}
                        aria-describedby="confirm-password-error"
                    />
                </div>
                <div className='check'>
                    <input
                        id="terms-check"
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                    />
                    <label htmlFor="terms-check">Accept Terms & Conditions</label>
                </div>
                {termsError && <p id="terms-error" style={{ color: 'red' }}>{termsError}</p>}
                {error && <p id="general-error" style={{ color: 'red' }}>{error}</p>}
                {success && <p id="success-message" style={{ color: 'green' }}>{success}</p>}
                <button
                    className='btn'
                    type="submit"
                    disabled={loading}
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
                <div className='lab1'>
                    <label>Already have an account?</label>
                    <Link to="/login" className="register-link">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default Register;

// src/components/Login/Login.js
import { useState } from 'react';
import { useAuth } from '..//../Contex/AuthContext';
import './login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            login(data.token); // Llama a login con el token recibido
            setMessage('Login successful.');
        } else {
            setMessage(`Error: ${data.message}`);
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">INGRESAR</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Username: </label>
                    <input
                        type="text"
                        className="form-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Password: </label>
                    <input
                        type="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">ENTRAR</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>

    );
};

export default Login;

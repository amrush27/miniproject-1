import React from 'react';

function Login({ email, setEmail, password, setPassword, setCurrentPage }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentPage('dashboard'); // Move to dashboard after logging in
  };

  return (
    <div className="auth-card">
      <div className="logo-area">✨ GlowUp Salon</div>
      <h2>Welcome Back</h2>
      <p className="subtitle">Log in to manage your appointments</p>
      
      <form onSubmit={handleLogin}>
        <div className="input-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary">Log In</button>
      </form>
      
      <p className="footer-text">
        Don't have an account? <span onClick={() => setCurrentPage('signup')}>Sign Up</span>
      </p>
    </div>
  );
}

export default Login;
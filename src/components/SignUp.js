import React from 'react';

function SignUp({ name, setName, email, setEmail, password, setPassword, setCurrentPage }) {
  const handleSignUp = (e) => {
    e.preventDefault();
    setCurrentPage('login'); // Move to login page after signing up
  };

  return (
    <div className="auth-card">
      <div className="logo-area">✨ GlowUp Salon</div>
      <h2>Create Account</h2>
      <p className="subtitle">Join us for a premium beauty experience</p>
      
      <form onSubmit={handleSignUp}>
        <div className="input-group">
          <label>Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button type="submit" className="btn-primary">Sign Up</button>
      </form>
      
      <p className="footer-text">
        Already have an account? <span onClick={() => setCurrentPage('login')}>Log In</span>
      </p>
    </div>
  );
}

export default SignUp;
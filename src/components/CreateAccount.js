import React, { useState } from 'react';
import styles from './CreateAccount.module.css';

export default function CreateAccount() {
  // page can be: 'signup', 'login', or 'dashboard'
  const [page, setPage] = useState('signup'); 
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Go directly to the dashboard page on submission
    setPage('dashboard');
  };

  const handleLogout = () => {
    // Go back to login page when logging out
    setPage('login');
    setFormData({ fullName: '', email: '', password: '' });
  };

  // ---------------- LAYER 1: THE DASHBOARD SCREEN ----------------
  if (page === 'dashboard') {
    return (
      <div className={styles.glowupBody}>
        <header className={styles.navbar}>
          <div className={styles.logo}>GlowUp Salon</div>
          <button onClick={handleLogout} className={styles.logoutBtn}>Log Out</button>
        </header>

        <main className={styles.mainContainer}>
          <div className={styles.dashboardCard}>
            <div className={styles.welcomeSection}>
              <h2>Welcome Back, {formData.fullName || 'Premium Guest'}! ✨</h2>
              <p>Your sanctuary of luxury and beauty relaxation awaits.</p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statBox}>
                <h3>Next Appointment</h3>
                <p className={styles.statHighlight}>Tomorrow at 2:30 PM</p>
                <span>Hair Styling & Spa Treats</span>
              </div>
              <div className={styles.statBox}>
                <h3>Glow Rewards</h3>
                <p className={styles.statHighlight}>450 Points</p>
                <span>50 points away from a free facial!</span>
              </div>
            </div>

            <div className={styles.servicesSection}>
              <h3>Quick Actions</h3>
              <div className={styles.actionButtons}>
                <button className={styles.submitBtn}>Book New Session</button>
                <button className={styles.secondaryBtn}>View Services Menu</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ---------------- LAYER 2: INTERACTIVE AUTH SCREENS (LOGIN / SIGNUP) ----------------
  return (
    <div className={styles.glowupBody}>
      <header className={styles.navbar}>
        <div className={styles.logo}>GlowUp Salon</div>
      </header>

      <main className={styles.mainContainer}>
        <div className={styles.signupCard}>
          <h1>{page === 'signup' ? 'Create Account' : 'Welcome Back'}</h1>
          <p className={styles.subtitle}>
            {page === 'signup' ? 'Join us for a premium beauty experience' : 'Log in to manage your appointments'}
          </p>

          <form onSubmit={handleSubmit}>
            {page === 'signup' && (
              <div className={styles.inputGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName"
                  placeholder="Your Full Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  required 
                />
              </div>
            )}

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Your Email Address" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrapper}>
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  name="password"
                  placeholder="••••••••" 
                  value={formData.password}
                  onChange={handleChange}
                  required 
                />
                <button 
                  type="button" 
                  className={styles.togglePasswordBtn}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className={styles.submitBtn}>
              {page === 'signup' ? "Sign Up" : "Log In"}
            </button>
          </form>

          <p className={styles.loginRedirect}>
            {page === 'signup' ? (
              <>
                Already have an account?{' '}
                <button 
                  type="button"
                  className={styles.inlineSwitchBtn} 
                  onClick={() => setPage('login')}
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                Don't have an account yet?{' '}
                <button 
                  type="button"
                  className={styles.inlineSwitchBtn} 
                  onClick={() => setPage('signup')}
                >
                  Sign Up
                </button>
              </>
            )}
          </p>
        </div>
      </main>
    </div>
  );
}
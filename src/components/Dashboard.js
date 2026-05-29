import React from 'react';

function Dashboard({ name, handleLogout }) {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-brand">✨ GlowUp</div>
        <nav className="sidebar-menu">
          <div className="menu-item active">🎨 Dashboard</div>
          <div className="menu-item">📅 Appointments</div>
          <div className="menu-item">💆‍♀️ Services</div>
          <div className="menu-item">⚙️ Settings</div>
        </nav>
        <button className="btn-logout" onClick={handleLogout}>Log Out</button>
      </aside>

      <main className="dashboard-content">
        <header className="dash-header">
          <h1>Hello, {name || 'Gorgeous'}! 👋</h1>
          <p>Welcome to your Beauty Dashboard. Here is your styling schedule today.</p>
        </header>

        <div className="stats-grid">
          <div className="stat-card purple">
            <h3>Total Bookings</h3>
            <p className="stat-number">12</p>
            <span className="stat-label">3 pending review</span>
          </div>
          <div className="stat-card pink">
            <h3>Favorite Treatment</h3>
            <p className="stat-number">Facial Glow</p>
            <span className="stat-label">Booked 5 times</span>
          </div>
          <div className="stat-card blue">
            <h3>Loyalty Points</h3>
            <p className="stat-number">450</p>
            <span className="stat-label">50 points to next free treat!</span>
          </div>
        </div>

        <section className="booking-section">
          <h2>Quick Book a New Appointment</h2>
          <form className="quick-book-form" onSubmit={(e) => { e.preventDefault(); alert('Appointment requested!'); }}>
            <div className="input-row">
              <div className="input-group">
                <label>Select Treatment</label>
                <select>
                  <option>Hair Styling & Cut</option>
                  <option>HydraFacial Glow</option>
                  <option>Gel Manicure & Spa</option>
                  <option>Bridal Makeup Touchup</option>
                </select>
              </div>
              <div className="input-group">
                <label>Preferred Date</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Preferred Time</label>
                <input type="time" />
              </div>
            </div>
            <button type="submit" className="btn-primary btn-dash">Confirm Booking Space</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
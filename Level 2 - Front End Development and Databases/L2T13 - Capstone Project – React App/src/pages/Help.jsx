import "./Help.css";

function Help() {
  return (
    <main className="help-page">
      <section className="help-container">
        <header className="help-header">
          <p className="eyebrow">NEED SOME HELP?</p>
          <h1>How to use Personal Event Planner</h1>
          <p>
            Follow these simple steps to create and manage your events.
          </p>
        </header>

        <section className="help-grid">
          <article className="help-card">
            <h2>1. Create an account</h2>
            <p>
              Select Register and provide your name, email address,
              username and password.
            </p>
          </article>

          <article className="help-card">
            <h2>2. Log in</h2>
            <p>
              Use the username and password you registered with to
              access your personal dashboard.
            </p>
          </article>

          <article className="help-card">
            <h2>3. Create an event</h2>
            <p>
              Select Add Event and enter the event name, date, time,
              location and optional description.
            </p>
          </article>

          <article className="help-card">
            <h2>4. Edit an event</h2>
            <p>
              Select Edit on an existing event, update the information
              and save your changes.
            </p>
          </article>

          <article className="help-card">
            <h2>5. Delete an event</h2>
            <p>
              Select Delete and confirm that you want to remove the
              event.
            </p>
          </article>

          <article className="help-card">
            <h2>6. Log out</h2>
            <p>
              Use the Logout button in the navigation when you have
              finished using your account.
            </p>
          </article>
        </section>

        <section className="help-tips">
          <h2>Helpful tips</h2>
          <ul>
            <li>Check your event date and time before saving.</li>
            <li>Use descriptive event names to find events easily.</li>
            <li>Include a location whenever one is available.</li>
            <li>Update your events if your plans change.</li>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default Help;
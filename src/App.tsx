import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1>Jo & Tom</h1>
        <div className="date">9th May 2020</div>
      </header>
      <main>
        <section>
          <h2>RSVP</h2>
          RSVP link
        </section>
        <section>
          <h2>Ceremony</h2>
          Ceremony details.
        </section>
        <section>
          <h2>Reception</h2>
          Reception details.
        </section>
        <section>
          <h2>Gift List</h2>
          Reception details.
        </section>
      </main>
    </div>
  );
}

export default App;

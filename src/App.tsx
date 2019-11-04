import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title">Tom & Jo</h1>
        <div className="date">9th May 2020</div>
      </header>
      <main>
        <section className="rsvp">
          <h2>RSVP</h2>
          <form name="rsvp" action="https://formspree.io/mwkedqrq" method="POST">
            <p>
              <label>Name(s) <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Notes <textarea name="notes"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </section>
        <section className="ceremony">
          <h2>Ceremony</h2>
          <time>15:00</time>
          <div>Christ Church Mayfair, Down Street, London, W1J 7AN</div>
          <a href="https://christchurchmayfair.org">christchurchmayfair.org</a>
        </section>
        <section className="reception">
          <h2>Reception</h2>
          <time>Until 23:30</time>
          <div>The Pump House Gallery, Battersea Park, London</div>
          <a href="https://pumphousegallery.org.uk/visit/how-to-find-us">pumphousegallery.org.uk/visit/how-to-find-us</a>
        </section>
        <section className="directionsToChurch">
          <h1>Getting to the Church</h1>
          <p>We recommend using public transport to get to the church. The nearest underground stations are Green Park and Hyde Park Corner - both are less than 10 minutes walk away.</p>
          <p>Parking near Christ Church Mayfair is very limited. You may find parking on the street but many places are residents only. There is a paid NCP car park on Carrington Street for £10 per hour.</p>
        </section>
        <section className="directionsToReception">
          <h1>Getting to the Reception</h1>
          <p>If you are using public transport we recommend taking the bus. Take the 137 from stop A outside the London Hilton Hotel on Park Lane. You can take it all the way to the Battersea Park's Chelsea Gate - stop CC.</p>
          <p>If you are driving you can park inside Battersea Park at the car park on Carriage Drive North.</p>
        </section>
        <section className="gifts">
          <h2>Gift List</h2>
          <div>Don't feel obliged to give us a gift. However if you wish to, John Lewis hold our gift list.</div>
          <div>Number: 999999999</div>
          <a href="https://johnlewis.com">johnlewis.com</a>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions not answered here please get in touch.</p>
          <form name="contact" action="https://formspree.io/mnqakzgo" method="POST">
            <p>
              <label>You Name <input type="text" name="name" /></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Question <textarea name="notes"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;

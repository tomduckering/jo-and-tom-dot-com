import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title">Tom & Jo</h1>
        <em className="date">Saturday 9th May 2020</em>
      </header>
      <main>
        <section className="rsvp">
          <h2>RSVP</h2>
          <em>Please let us know that you're coming.</em>
          <form name="rsvp" action="https://formspree.io/mwkedqrq" method="POST">
            <p>
              <input type="text" name="name" placeholder="Your name" />
            </p>
            <p>
              <input type="email" name="email" placeholder="Your email address" />
            </p>
            <p>
              <textarea name="notes" placeholder="Let us know of any dietary requirements or needs you have that we can cater for"></textarea>
            </p>
            <p>
              <button type="submit">Confirm</button>
            </p>
          </form>
        </section>
        <section className="ceremony">
          <h2>Ceremony</h2>
          <time>for 3·00pm</time>
          <div className="address">
            <p>Christ Church Mayfair</p>
            <p>Down Street</p>
            <p>London</p>
            <p>W1J 7AN</p>
          </div>
          <a href="https://christchurchmayfair.org">christchurchmayfair.org</a>
        </section>
        <section className="reception">
          <h2>Reception</h2>
          <p><em>by invitation only</em></p>
          <time>until 11·30pm</time>
          <div className="address">
            <p>The Pump House Gallery</p>
            <p>Battersea Park</p>
            <p>London</p>
          </div>
          <a href="https://pumphousegallery.org.uk/visit/how-to-find-us">pumphousegallery.org.uk/visit/how-to-find-us</a>
        </section>
        <section className="directionsToChurch">
          <h2>Getting to the Church</h2>
          <p>We recommend using public transport to get to the church.</p>
          <p>The nearest underground stations are Green Park and Hyde Park Corner - both are less than 10 minutes walk away.</p>
          <p>Parking near the church is very limited. You may find parking on the street but many places are restricted for residents only.</p>
          <p>There is a paid NCP car park on Carrington Street for £10 per hour.</p>
        </section>
        <section className="directionsToReception">
          <h2>Getting to the Reception</h2>
          <p>If you are using public transport we recommend taking the bus. Take the 137 from stop A outside the London Hilton Hotel on Park Lane. You can take it all the way to the Battersea Park's Chelsea Gate - stop CC.</p>
          <p>If you are driving you can park inside Battersea Park at the car park on Carriage Drive North. More information is available at <a href="https://www.wandsworth.gov.uk/parking/parking-zones/battersea-park-area-parking-zones/">Wandworth Borough Council's Website</a></p>
        </section>
        <section className="gifts">
          <h2>Gift List</h2>
          <div>Don't feel obliged to give us a gift. If you wish to however John Lewis is holding our gift list.</div>
          <div>Number: 776905</div>
          <a href="https://www.johnlewisgiftlist.com/giftint/JSPs/GiftList/BuyGifts/GuestFindAList.jsp">John Lewis Gift List</a>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions not answered here please get in touch.</p>
          <form name="contact" action="https://formspree.io/mnqakzgo" method="POST">
            <p>
              <label>Name <input type="text" name="name" placeholder="Your name"/></label>
            </p>
            <p>
              <label>Email <input type="email" name="email" placeholder="Your email address"/></label>
            </p>
            <p>
              <label>Your Question <textarea name="notes" placeholder="Ask your question here"></textarea></label>
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

import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title">Tom & Jo</h1>
        <p className="date">Saturday 9th May<br></br>2020</p>
        <p className="fleuron">❦</p>
      </header>
      <main>
        <section className="rsvp">
          <h2>R.S.V.P.</h2>
          <em>Please let us know by Friday 28th February if you're coming.</em>
          <form name="rsvp" action="https://formspree.io/mwkedqrq" method="POST">
          <p>
            <label className="switch">
              <input name="Coming" type="checkbox" defaultChecked={true}></input>
              <span className="slider"></span>
              </label>
            </p>
            <p>
              <input type="text" name="name" placeholder="Your name(s)" />
            </p>
            <p>
              <input type="email" name="email" placeholder="Your email address" />
            </p>
            <p>
              <textarea name="notes" placeholder="Let us know of any dietary requirements or needs you have that we can cater for"></textarea>
            </p>
            <p>
              <button type="submit">Respond</button>
            </p>
          </form>
        </section>
        <section className="ceremony">
          <h2>Ceremony</h2>
          <p>for <time>2.30pm</time> at</p>
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
          <p>from 4.45pm until <time>midnight</time> at</p>
          <div className="address">
            <p>The Pump House Gallery</p>
            <p>Battersea Park</p>
            <p>London</p>
          </div>
          <a href="https://pumphousegallery.org.uk/visit/how-to-find-us">pumphousegallery.org.uk</a>
        </section>
        <section className="directionsToChurch">
          <h2>Getting to the Church</h2>
          <p><em>We recommend using public transport to get to the church.</em></p>
          <p>The nearest underground stations are Green Park and Hyde Park Corner—both are less than 10 minutes walk to the church.</p>
          <p>Parking near the church is very limited. </p>
          <p>You may find parking on the street but many places are restricted for residents only.</p>
        </section>
        <section className="directionsToReception">
          <h2>Getting to the Reception</h2>
          <p><em>Again, we recommend using public transport to get to the reception.</em></p>
          <p>You can take the 137 bus from stop <a href="https://tfl.gov.uk/bus/stop/490009277S/london-hilton-hotel?lineId=137">A</a> outside the London Hilton Hotel on Park Lane all the way to Battersea Park's Chelsea Gate—alighting at stop <a href="https://tfl.gov.uk/bus/stop/490005064S/battersea-park-chelsea-gate?lineId=137">CC</a>. From here it's a 10 minute walk to the Pump House.</p>
          <p>Find more details for this journey on the <a href="https://tfl.gov.uk/plan-a-journey/results?InputFrom=London+Hilton+Hotel&From=London+Hilton+Hotel&FromId=1009277&InputTo=Battersea+Park+%2F+Chelsea+Gate&ToId=1005064">TFL website</a>.</p>
          <p>If you are driving you can park inside Battersea Park at the car park on Carriage Drive North.</p>
          <p>More information is available at <a href="https://www.wandsworth.gov.uk/parking/parking-zones/battersea-park-area-parking-zones/">Wandsworth Borough Council's website</a>.</p>
        </section>
        <section className="gifts">
          <h2>Gift List</h2>
          <p>Please don't feel obligated to give us a gift—however if you wish to, John Lewis are holding our gift list.</p>
          <p>List Number: 776905</p>
          <a href="https://www.johnlewisgiftlist.com/giftint/JSPs/GiftList/BuyGifts/GuestFindAList.jsp">John Lewis Gift List</a>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p><em>If you have any further questions please get in touch.</em></p>
          <form name="contact" action="https://formspree.io/mnqakzgo" method="POST">
            <p>
              <input type="text" name="name" placeholder="Your name"/>
            </p>
            <p>
              <input type="email" name="email" placeholder="Your email address"/>
            </p>
            <p>
              <textarea name="notes" placeholder="Ask your question here"></textarea>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </section>
      </main>
      <footer>
        <p className="fleuron">❦</p>
      </footer>
    </div>
  );
}

export default App;

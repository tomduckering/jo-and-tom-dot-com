import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <h1 className="title">Tom & Jo</h1>
        <p className="date">
          Saturday 18th July<br></br>2020
        </p>
        <p className="fleuron">❦</p>
      </header>
      <main>
        <section className="livestream">
          <h2>Join Us Online</h2>
          <p>
            <em>For those who want to join, here are the details:</em>
          </p>
          <p className={"date"}>
            <time>11.00am BST</time> / <time>8.00pm AEST</time>
          </p>
          <p className={"date"}>Saturday July 18th</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Hxp9j1kblvM"
            frameBorder={0}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className={"streamLinks"}>
            <a
              className="button"
              href="https://www.youtube.com/watch?v=Hxp9j1kblvM"
            >
              YouTube Livestream
            </a>
          </p>
          <p>
            If you are using another device, like a Smart TV, you can search in YouTube for "
            <em>Tom Jo Marriage Ceremony</em>".
          </p>
        </section>
        <section className="changeOfPlan">
          <h2>A Change of Plan</h2>
          <p>
            <em>
              Sadly we missed our original date but have recently confirmed that
              we can get married.
            </em>
          </p>
          <p>
            Due to limitations on numbers and travel restrictions for overseas
            family we have decided to have a very small wedding in July and
            postpone the full celebration until May 2021. This is disappointing
            for everyone but we will eagerly wait for a wonderful celebration
            with all of you.
          </p>
          <p>
            <em>To that end please mark Friday May 7th 2021 in your diary.</em>
          </p>
        </section>
        <section className="gifts">
          <h2>Gift List</h2>
          <p>
            Please don't feel obligated to give us a gift—however if you wish to
            our bridesmaid Katie is maintaining a gift list.
          </p>
          <p>
            You can contact her via email:{" "}
            <a href="mailto:kvivyan@hotmail.com">Katie Vivyan</a>
          </p>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>
            <em>If you have any further questions please get in touch.</em>
          </p>
          <form
            name="contact"
            action="https://formspree.io/mnqakzgo"
            method="POST"
          >
            <p>
              <input type="text" name="name" placeholder="Your name" />
            </p>
            <p>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </p>
            <p>
              <textarea
                name="notes"
                placeholder="Ask your question here"
              ></textarea>
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
};

export default App;

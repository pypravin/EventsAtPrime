// src/App.jsx
import Events from "./components/Events/Events";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="events-section">
          <h1 className="section-title">List of Events</h1>
          <Events />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

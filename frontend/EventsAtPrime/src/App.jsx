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
          <Events />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;

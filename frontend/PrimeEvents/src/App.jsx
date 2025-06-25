import Footer from "./components/Footer/Footer";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>
      <main className="container my-4 flex-grow-1"><p>content</p></main>
      
      <Footer/>
    </div>
  );
}

export default App;

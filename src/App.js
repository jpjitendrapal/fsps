import Header from "./layout/Header";
import "./styles.css";
import Home from "./pages/home/Home";
import Footer from "./layout/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

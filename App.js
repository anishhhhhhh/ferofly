import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import OurServices from "./components/OurServices";
import TTD from "./components/TTD";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <OurServices />
      <TTD />
      <Contact />
    </div>
  );
}

export default App;

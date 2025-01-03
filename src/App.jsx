import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Menu";
import Portfolio from "./components/Projects/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Menu />
      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

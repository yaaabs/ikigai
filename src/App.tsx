import Navbar from './components/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Achievements from './pages/Achievements/Achievements'; // ✅ Import Achievements
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ width: '100%', scrollBehavior: 'smooth' }}>
        <section id="home" style={{ minHeight: '100vh', paddingTop: 0 }}>
          <Home />
        </section>
        <section id="about" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
            <About />
          </div>
        </section>
        <section id="projects" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
            <Projects />
          </div>
        </section>
        <section id="achievements" style={{ minHeight: '80vh', paddingTop: '4rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
            <Achievements />
          </div>
        </section>
        <section id="contact" style={{ minHeight: '100vh', paddingTop: '4rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1rem' }}>
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

import Navbar from './components/section/navbar';
import Footer from './components/section/footer';
import Hero from './components/site/Hero';
import About from './components/site/About';
import Services from './components/site/Services';
import Process from './components/site/Process';
import WhyUs from './components/site/WhyUs';
import Contact from './components/site/Contact';
import Gallery from './components/site/Gallery';

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <WhyUs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Counter from './components/UI/Counter';
import Services from './components/UI/Services';
import About from './components/UI/About';
import Testimonial from './components/UI/Testimonial';
import Contact from './components/UI/Contact';
import Footer from './components/UI/Footer';

function App() {
  return (
        <>
         <Header/>
         <Hero/>
         <Counter/>
         <About/>
         <Services/>
         <Testimonial/>
         <Contact/>
         <Footer/>
        </>
  );
}

export default App;

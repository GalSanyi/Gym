import Header from './Header/Header';
import Hero from './UI/Hero';
import Exercise from './UI/Exercise';
import Start from './UI/Start';
import Pricing from './UI/Pricing';
import Testimonials from './UI/Testimonials';
import Footer from './UI/Footer';
import { useEffect } from 'react';
import Aos from 'aos';

export const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Exercise />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

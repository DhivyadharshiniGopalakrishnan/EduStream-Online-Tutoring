
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Resources from './components/Resources';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import AIStudyPlanner from './components/AIStudyPlanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Resources />
        <AIStudyPlanner />
        <Pricing />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;

import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import BentoGrid from './components/BentoGrid';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app-wrapper">
            <NavBar />
            <main>
                <Hero />
                <StorySection />
                <BentoGrid />
                <WaitlistForm />
            </main>
            <Footer />
        </div>
    );
}

export default App;

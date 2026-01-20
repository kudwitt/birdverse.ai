import React, { useEffect, useRef, useState } from 'react';

const StorySection = () => {
    const [reveal, setReveal] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Start revealing when top enters, finish when center is in view
            let progress = 1 - (rect.top / (windowHeight * 0.6));
            progress = Math.max(0, Math.min(1, progress));

            setReveal(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="story-section" ref={sectionRef} id="story">
            <div className="container">
                <p className="story-text">
                    <span className="story-segment" style={{ opacity: Math.max(0.1, Math.min(1, reveal * 1.5)) }}>
                        Believe it or not 20 years ago it cost <span className="highlight-warm">$400</span> in broker commissions just to trade 100 shares of stock.
                    </span>
                    <br /><br />
                    <span className="story-segment" style={{ opacity: Math.max(0.1, Math.min(1, (reveal - 0.3) * 2)) }}>
                        The aviation industry is stuck in that past. Private fliers tolerate obsequious brokers and opaque pricing.
                    </span>
                    <br /><br />
                    <span className="story-segment highlight-brand" style={{ opacity: Math.max(0.1, Math.min(1, (reveal - 0.6) * 3)) }}>
                        Birdverse instantly connects the world's best operators directly with private fliers to provide a plethora of options and full pricing transparency.
                    </span>
                </p>
            </div>

            <style>{`
                .story-section {
                    background-color: #000;
                    padding: 200px 0;
                    margin-top: 40px;
                }

                .story-text {
                    font-size: 56px;
                    line-height: 1.1;
                    font-weight: 600;
                    letter-spacing: -0.015em;
                    color: #fff;
                    max-width: 900px;
                    margin: 0 auto;
                }

                .story-segment {
                    transition: opacity 0.2s linear;
                    color: #fff;
                }
                
                .highlight-warm {
                    color: var(--color-accent-warm);
                }
                
                .highlight-brand {
                    background: linear-gradient(90deg, #fff, var(--color-brand-blue));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                @media (max-width: 734px) {
                    .story-text {
                        font-size: 32px;
                    }
                }
            `}</style>
        </section>
    );
};

export default StorySection;

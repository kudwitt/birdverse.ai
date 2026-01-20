import React from 'react';
import content from '../content.json';

const Hero = () => {
    const { title, subtitle } = content.hero;

    return (
        <section className="hero-section" id="overview">
            <div className="container hero-container">
                <div className="hero-brand fade-in-up" style={{ animationDelay: '0.1s' }}>{title}</div>
                <h1 className="hero-headline fade-in-up" style={{ animationDelay: '0.3s' }}>
                    How smart money<br />
                    <span className="text-gradient">flies private.</span>
                </h1>

                <div className="hero-cta-container fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <a href="#waitlist" className="btn btn-primary">Notify me</a>
                    <a href="#story" className="link-arrow">Learn more <span className="arrow">›</span></a>
                </div>

                {/* Image removed by user request */}
            </div>

            <style>{`
                .hero-section {
                    background: var(--color-bg);
                    padding-top: 140px; /* Space for Navbar */
                    text-align: center;
                    padding-bottom: 80px;
                }

                .hero-brand {
                    font-size: 21px;
                    font-weight: 600;
                    color: var(--color-accent); /* Like "New" or "Pro" label */
                    margin-bottom: 12px;
                    letter-spacing: 0.011em;
                }

                .hero-headline {
                    font-size: 80px;
                    line-height: 1.05;
                    font-weight: 600;
                    letter-spacing: -0.015em;
                    color: var(--color-text);
                    margin-bottom: 24px;
                }
                
                .text-gradient {
                   /* Optional: slight gradient to soften the black if needed, pure black is usually fine for Apple */
                   /* color: #1d1d1f; */
                }

                .hero-cta-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 60px;
                }
                
                .link-arrow {
                    color: var(--color-accent);
                    text-decoration: none;
                    font-size: 21px;
                    font-weight: 400;
                }
                
                .link-arrow:hover {
                    text-decoration: underline;
                }
                
                .arrow {
                    display: inline-block;
                    transition: transform 0.2s;
                }
                .link-arrow:hover .arrow {
                    transform: translateX(3px);
                }

                .hero-image-placeholder {
                    margin-top: 40px;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 0 40px 100px -20px rgba(0,0,0,0.2); /* Deep elegant shadow */
                    max-width: 1000px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .hero-image-placeholder img {
                    width: 100%;
                    height: auto;
                    display: block;
                    transform: scale(1.01); /* Prevent pixel gaps */
                }

                /* Animation Keyframes */
                .fade-in-up {
                    opacity: 0;
                    transform: translateY(30px);
                    animation: fadeInUp 1s var(--ease-apple) forwards;
                }

                @keyframes fadeInUp {
                    to { opacity: 1; transform: translateY(0); }
                }

                @media (max-width: 734px) {
                    .hero-headline {
                        font-size: 48px;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;

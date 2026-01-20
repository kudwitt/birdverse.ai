import React from 'react';

const BentoGrid = () => {
    return (
        <section className="bento-section">
            <div className="container">
                <h2 className="section-title">Designed for two worlds.</h2>
                <div className="grid">
                    {/* Card 1: Private Flier */}
                    <div className="card flier">
                        <div className="card-image-top">
                            <svg className="card-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                            </svg>
                        </div>
                        <div className="card-content">
                            <span className="eyebrow">Private Fliers</span>
                            <h3>Fly smart.</h3>
                            <p>Trip quotes are a text message away. Plus, there are no membership fees and a modest 5% platform fee - as opposed to the usual 15%, 20% or more opaque broker fees.</p>
                        </div>
                    </div>

                    {/* Card 2: Operator */}
                    <div className="card operator">
                        <div className="card-image-top">
                            <svg className="card-icon warm" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                            </svg>
                        </div>
                        <div className="card-content">
                            <span className="eyebrow">Operators</span>
                            <h3>Remove the middleman.</h3>
                            <p>Provide service directly to private fliers and communicate directly with them to insure their needs are met and to build a direct relationship.</p>
                        </div>
                    </div>

                    {/* Card 3: Network (Compliant) */}
                    <div className="card network">
                        <h3>Verified Network</h3>
                        <p>Access a curated marketplace of the most highly safety-rated Part 135 operators from around the globe.</p>
                    </div>
                </div>
            </div>

            <style>{`
                .bento-section {
                    background: var(--color-bg-alt);
                    padding: 120px 0;
                }

                .section-title {
                    font-size: 56px;
                    text-align: center;
                    margin-bottom: 60px;
                }

                .grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: auto auto; /* Auto height for rows */
                    gap: 24px;
                    max-width: 980px;
                    margin: 0 auto;
                }

                .card {
                    background: #fff;
                    border-radius: 28px;
                    overflow: hidden;
                    box-shadow: 2px 4px 12px rgba(0,0,0,0.08);
                    transition: transform 0.3s var(--ease-apple);
                    display: flex;
                    flex-direction: column;
                }
                
                .card:hover {
                    transform: scale(1.01);
                    box-shadow: 4px 8px 24px rgba(0,0,0,0.12);
                }

                .flier {
                    grid-column: 1;
                    grid-row: 1;
                }

                .operator {
                    grid-column: 2;
                    grid-row: 1;
                }

                .network {
                    grid-column: 1 / span 2;
                    grid-row: 2;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background: #000;
                    color: #fff;
                    padding: 60px 40px;
                }
                
                .eyebrow {
                    display: block;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                    color: var(--color-text-secondary);
                    margin-bottom: 8px;
                }
                
                .card-content {
                    padding: 32px;
                    flex: 1;
                }
                
                .card h3 {
                    font-size: 32px;
                    margin-bottom: 12px;
                }
                
                .card p {
                    font-size: 19px;
                    color: var(--color-text-secondary);
                    line-height: 1.4;
                }
                
                /* New Image Top Layout */
                .card-image-top {
                    width: 100%;
                    height: 240px;
                    background: #f5f5f7;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .card-icon {
                    width: 64px;
                    height: 64px;
                    color: var(--color-brand-blue);
                    opacity: 0.8;
                }
                
                .card-icon.warm {
                    color: var(--color-brand-copper);
                }

                .network h3 {
                    color: #fff;
                }
                .network p {
                    color: #888;
                }

                @media (max-width: 734px) {
                    .grid {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                        gap: 16px;
                    }
                    .flier, .operator, .network {
                        grid-column: 1 !important;
                        grid-row: auto !important;
                    }
                    .section-title {
                        font-size: 36px;
                        margin-bottom: 40px;
                    }
                    .card-image-top {
                        height: 180px;
                    }
                    .card h3 {
                        font-size: 24px;
                    }
                }
            `}</style>
        </section>
    );
};

export default BentoGrid;

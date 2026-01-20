import React, { useEffect, useState } from 'react';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <div className="nav-logo-container">
                    <img src="/assets/logo.png" alt="Birdverse" className="nav-logo" />
                    <span className="nav-brand">Birdverse</span>
                </div>
                <div className="nav-links">
                    <a href="#overview">Overview</a>
                    <a href="#story">Vision</a>
                    <a href="#waitlist" className="btn btn-primary btn-small">Join Waitlist</a>
                </div>
            </div>

            <style>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 52px;
                    z-index: 9999;
                    background: rgba(255, 255, 255, 0);
                    transition: background 0.3s var(--ease-apple), border-bottom 0.3s;
                    border-bottom: 1px solid transparent;
                }

                .navbar.scrolled {
                    background: rgba(255, 255, 255, 0.72);
                    backdrop-filter: saturate(180%) blur(20px);
                    border-bottom: 1px solid rgba(0,0,0,0.08);
                }

                .nav-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    height: 100%;
                }

                .nav-logo-container {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .nav-logo {
                    height: 28px;
                    width: auto;
                }
                
                .nav-brand {
                    font-weight: 600;
                    font-size: 19px;
                    letter-spacing: -0.01em;
                    color: var(--color-text);
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                }

                .nav-links a {
                    font-size: 12px;
                    color: var(--color-text);
                    text-decoration: none;
                    opacity: 0.8;
                    transition: all 0.2s;
                    font-weight: 400;
                }
                
                .nav-links a:hover {
                    opacity: 1;
                    color: var(--color-accent);
                }

                .btn-small {
                    font-size: 12px;
                    padding: 4px 12px;
                    background: var(--color-accent); 
                    color: #ffffff !important;
                }
                
                .btn-small:hover {
                     background: var(--color-accent-hover);
                }
            `}</style>
        </nav>
    );
};

export default NavBar;

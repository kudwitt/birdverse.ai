import React, { useState } from 'react';

const WaitlistForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    // Replace this with your actual Formspree Endpoint or API URL
    const FORM_ENDPOINT = "https://formspree.io/f/FORM_ID_HERE";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // If the user hasn't set up the endpoint, we simulate success for the demo
            if (FORM_ENDPOINT.includes('FORM_ID_HERE')) {
                console.warn('Form submission simulated. Replace FORM_ENDPOINT in WaitlistForm.jsx with your real API URL.');
                await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
                setStatus('success');
                setEmail('');
                return;
            }

            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ email: email, subject: "New Birdverse Waitlist Signup" })
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
            // Revert to idle after 3 seconds so they can try again
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className="notify-section" id="waitlist">
            <div className="container">
                <div className="notify-content">
                    <h2>Be the first to know.</h2>
                    <p>Birdverse is currently invite-only.</p>

                    <form onSubmit={handleSubmit} className="notify-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className={`notify-input ${status === 'error' ? 'input-error' : ''}`}
                            disabled={status === 'loading' || status === 'success'}
                        />
                        <button type="submit" className={`circle-btn ${status}`} disabled={status === 'loading' || status === 'success'}>
                            {status === 'loading' ? (
                                <span className="loader"></span>
                            ) : status === 'success' ? (
                                <span className="check">✓</span>
                            ) : (
                                <span className="icon-arrow">→</span>
                            )}
                        </button>
                    </form>

                    {status === 'success' && <p className="success-msg fade-in">You're on the list.</p>}
                    {status === 'error' && <p className="error-msg fade-in">Something went wrong. Please try again.</p>}
                </div>
            </div>

            <style>{`
                .notify-section {
                    background: #fff;
                    padding: 150px 0;
                    text-align: center;
                }
                
                .notify-content {
                    max-width: 480px;
                    margin: 0 auto;
                }
                
                h2 {
                    font-size: 48px;
                    margin-bottom: 16px;
                }
                
                p {
                    font-size: 21px;
                    color: var(--color-text-secondary);
                    margin-bottom: 40px;
                }
                
                .notify-form {
                    position: relative;
                    max-width: 400px;
                    margin: 0 auto;
                }
                
                .notify-input {
                    display: block;
                    width: 100%;
                    padding: 16px 60px 16px 24px;
                    font-size: 17px;
                    border: 1px solid #d2d2d7;
                    border-radius: var(--radius-btn);
                    outline: none;
                    transition: border-color 0.2s;
                    background: #fff;
                }
                
                .notify-input:focus {
                    border-color: var(--color-accent);
                }
                
                .notify-input.input-error {
                    border-color: #ff3b30;
                }
                
                .circle-btn {
                    position: absolute;
                    top: 6px;
                    right: 6px;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: var(--color-accent);
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: none;
                    font-size: 20px;
                    transition: transform 0.2s, background 0.2s, opacity 0.2s;
                    cursor: pointer;
                }
                
                .circle-btn:hover:not(:disabled) {
                    transform: scale(1.05);
                    background: var(--color-accent-hover);
                }
                
                .circle-btn:disabled {
                    cursor: default;
                }
                
                .circle-btn.success {
                    background: #34c759; /* Apple Green */
                }
                
                .circle-btn.error {
                    background: #ff3b30; /* Apple Red */
                }
                
                .success-msg {
                    margin-top: 16px;
                    color: #34c759;
                    font-size: 14px;
                    font-weight: 500;
                }
                
                .error-msg {
                     margin-top: 16px;
                     color: #ff3b30;
                     font-size: 14px;
                }
                
                .fade-in {
                    animation: fadeIn 0.5s ease;
                }
                
                /* Simple CSS Loader */
                .loader {
                    border: 2px solid rgba(255,255,255,0.3);
                    border-radius: 50%;
                    border-top: 2px solid #fff;
                    width: 16px;
                    height: 16px;
                    animation: spin 1s linear infinite;
                }
                
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                @media(max-width: 734px) {
                    h2 { font-size: 36px; }
                }

                @media(max-width: 480px) {
                    h2 { font-size: 28px; }
                    p { font-size: 17px; }
                    .notify-section { padding: 80px 0; }
                }
            `}</style>
        </section>
    );
};

export default WaitlistForm;

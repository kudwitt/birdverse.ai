import React from 'react';
import content from '../content.json';

const Footer = () => {
  const { brand, copyright } = content.footer;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h4>{brand}</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#">Private Fliers</a></li>
              <li><a href="#">Operators</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{copyright}</p>
          <p>United States</p>
        </div>
      </div>
      <style>{`
                .footer {
                    background-color: #f5f5f7;
                    font-size: 12px;
                    color: #86868b;
                    padding: 40px 0 20px;
                }
                
                .footer-content {
                    display: grid;
                    grid-template-columns: repeat(5, 1fr);
                    gap: 20px;
                    border-bottom: 1px solid #d2d2d7;
                    padding-bottom: 20px;
                    margin-bottom: 10px;
                }
                
                .footer-col h4 {
                    font-size: 12px;
                    font-weight: 600;
                    color: #1d1d1f;
                    margin-bottom: 10px;
                }
                
                 .footer-col ul {
                    list-style: none;
                 }
                 
                 .footer-col li {
                    margin-bottom: 7px;
                 }
                 
                 .footer-col a {
                    color: #424245;
                    text-decoration: none;
                 }
                 
                 .footer-col a:hover {
                    text-decoration: underline;
                 }
                 
                 .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    color: #86868b;
                 }
                 
                 @media (max-width: 734px) {
                    .footer-content {
                        grid-template-columns: 1fr;
                    }
                 }
            `}</style>
    </footer>
  );
};

export default Footer;

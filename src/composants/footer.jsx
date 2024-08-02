import React from 'react';
import '../styles/footer.scss'
import logo from '../assets/images/logo_footer.png'; 

const Footer = () => {
  return (
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="logo_footer" />
        <div className="text_footer">
         <p>© 2024 Kasa, All <br className="line-break" /> rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
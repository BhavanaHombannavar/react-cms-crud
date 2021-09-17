import React from 'react';
import styles from './Footer.module.css';

function Footer(){
  return (
        <footer className={styles.footer_con}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Team</h3>
                        <h4>Lisa</h4>
                        <h4>Danielle</h4>
                        <h4>Brian</h4>
                        <h4>Join us!</h4>
                    </div>
                    <div className="col">
                        <h3>Learn More</h3>
                        <h4>Manifesto</h4>
                        <h4>Works</h4>
                        <h4>Stories</h4>
                    </div>
                    <div className="col">
                        <h3>Meet Us</h3>
                        <h4>Studio</h4>
                        <h4>Community</h4>
                        <h4>Workshops</h4>
                    </div>
                    <div className="col">
                        <h3>Contact</h3>
                        <h4>Twitter</h4>
                        <h4>Facebook</h4>
                        <h4>Instagram</h4>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;

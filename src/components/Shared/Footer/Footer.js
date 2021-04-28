import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Education For All</small>
                        <br />
                        <small>Almost Free Education</small>
                        <br />
                        <small>Modern Technology</small>
                        <br />
                        <small>General Knowledge</small>
                        <br />
                        <small>Care</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Networking</p>
                    </div>
                    <div>
                        <small>Intensive Care</small>
                        <br />
                        <small>Coaching</small>
                        <br />
                        <small>Monthly Special workshop</small>
                        <br />
                        <small>Online Social Media Connection</small>
                        <br />
                        <small>TA Help</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Our Address</p>
                    </div>
                    <div>
                        <small>Dhaka, Bangladesh</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">+88012345678</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
                <small>Copyright 2020 All Right Reserved</small>
            </div>
        </div>
    );
};

export default Footer;
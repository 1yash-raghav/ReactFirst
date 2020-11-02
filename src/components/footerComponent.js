import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer(props) {
    return (
        <div className="footer" style={{backgroundColor: "#000000"}} >
        <div className="container" style={{padding: 20}}>
            <div className="row justify-content-center" >             
                <div className="col-4 offset-1 col-sm-2">
                    <h5 style={{color: "#FFFFFF"}}>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/home" style={{ color: '#F9A826' }}>Home</Link></li>
                        <li><Link to="/aboutus" style={{ color: '#F9A826' }}>About</Link></li>
                        <li><Link to="/menu" style={{ color: '#F9A826' }}>Menu</Link></li>
                        <li><Link to="/contactus" style={{ color: '#F9A826' }}>Contact</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5 style={{color: "#FFFFFF"}}>Our Address</h5>
                    <address style={{color: "#FFFFFF"}}>
                      Sachdeva Food Court<br />  
		              121, Bawana Road<br />
		              infront of Delhi Technological University<br />
		              New Delhi, IN<br /><br />
		              <FontAwesomeIcon icon={faPhone} />: +852 1234 5678<br />
		              <FontAwesomeIcon icon={faPhone} />: +852 8765 4321<br /><br />
		              <FontAwesomeIcon icon={faEnvelope} />: <a href="mailto:sachdeva@food.net" style={{ color: '#F9A826' }}>
                         sachdeva@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+" style={{ color: '#F9A826'}}><FontAwesomeIcon icon={['fab', 'google']} /></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=" style={{ color: '#F9A826' }}><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/" style={{ color: '#F9A826' }}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/" style={{ color: '#F9A826' }}><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/" style={{ color: '#F9A826' }}><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                        <a className="btn btn-social-icon" href="mailto:" style={{ color: '#F9A826' }}><FontAwesomeIcon icon={faEnvelope} /></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p style={{color: "#FFFFFF"}}>© Copyright 2018 Sachdeva Food Court</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;
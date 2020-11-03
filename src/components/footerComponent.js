import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faGoogle, faFacebook, faYoutube, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <div className="footer" style={{backgroundColor: "#000000"}} >
        <div className="container" style={{padding: 20}}>
            <div className="row justify-content-center" >             
                <div className="col-4 col-sm-2">
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
		              <FontAwesomeIcon icon={faPhone} />: 99711 90679<br />
		              <FontAwesomeIcon icon={faPhone} />: 99711 90679<br /><br />
		              <FontAwesomeIcon icon={faEnvelope} />: <a href="mailto:sachdeva@food.net" style={{ color: '#F9A826' }}>
                         sachdeva@food.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-5">
                        <a href="http://google.com/+" style={{ color: '#F9A826'}}><Button outline><FontAwesomeIcon icon={faGoogle} /></Button></a>
                        <a href="http://www.facebook.com/profile.php?id=" style={{ color: '#F9A826' }}><Button outline><FontAwesomeIcon icon={faFacebook} /></Button></a>
                        <a href="http://www.linkedin.com/in/" style={{ color: '#F9A826' }}><Button outline><FontAwesomeIcon icon={faLinkedin} /></Button></a>
                        <a href="http://twitter.com/" style={{ color: '#F9A826' }}><Button outline><FontAwesomeIcon icon={faTwitter} /></Button></a>
                        <a href="http://youtube.com/" style={{ color: '#FFFFF' }}><Button outline><FontAwesomeIcon icon={faYoutube} /></Button></a>
                        <a href="mailto:" style={{ color: '#F9A826' }}><Button outline><FontAwesomeIcon icon={faEnvelope} /></Button></a>
                        
                   
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
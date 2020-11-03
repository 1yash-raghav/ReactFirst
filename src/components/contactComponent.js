import React, { Component } from 'react';
import Button from '../Button';
import {Label, Col, Row} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMobile, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {Control, LocalForm, Errors} from 'react-redux-form';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }
    
    render(){
        return (
        <div className="container" style={{ color: '#FFFFFF', paddingTop: "100px" }}>
            <div className="row row-content">
                <div className="col-12">
                    <h3 style={{color: "#F9A826"}}>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                   <h5>Our Address</h5>
                    <address >
                    1, Bawana Rd, Block C<br/>
                    Rohini, Delhi<br/>
                    IN 110042<br/>
		              <FontAwesomeIcon icon={faMobile}/> : 99711 90679<br/>
		              <FontAwesomeIcon icon={faMobile}/> : 99711 90679<br/>
		              <FontAwesomeIcon icon={faEnvelope} /> : <a href="mailto:sachdeva@food.net" style={{ color: '#F9A826' }}>
                         sachdeva@food.net</a>
		           </address>
            </div>
            <div className="col-12 col-sm-6 offset-sm-1">
                <h5 style={{color: "#F9A826"}}>Map of our Location</h5>
            </div>
            <div className="col-12 col-sm-11 offset-sm-1">
                <a href="tel:9643584988" style={{ color: '#F9A826', fontFamily:'sans-serif'}}><Button outline style={{ borderColor: "#FFFFFF"}}><h5 style={{fontFamily:'sans-serif'}}><FontAwesomeIcon icon={faMobile} /> Call</h5></Button></a>
                <a href="whatsapp://send?abid=phonenumber&text=Hello!" style={{ color: '#F9A826', fontFamily:'sans-serif'}}><Button outline><h5 style={{fontFamily:'sans-serif'}}><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</h5></Button></a>
                <a href="mailto:sachdeva@gmail.com" style={{ color: '#F9A826', fontFamily:'sans-serif'}}><Button outline><h5 style={{fontFamily:'sans-serif'}}><FontAwesomeIcon icon={faEnvelope} /> Mail</h5></Button></a>
            </div>
            
        </div>

        <div className="row row-content" style={{padding: "80px"}}>
           <div className="col-12">
              <h3 style={{color: "#F9A826"}}>Send us your Feedback</h3>
           </div>
            <div className="col-12 col-md-10" style={{color: "#F9A826", padding: "20px"}}>
                <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label for="firstname" md={2}>First Name :</Label>
                        <Col md={3}>
                            <Control.text model='.firstname' className="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                            
                        </Col>
                        <Label for="lastname" md={2}>Last Name :</Label>
                        <Col md={3}>
                             <Control.text model='.lastname' className="form-control" id="lastname" placeholder="Last Name"/>
                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label for="phonenumber" md={2}>Phone No. :</Label>
                        <Col md={8}>
                            <Control.text model='.phonenumber' className="form-control" id="phonenumber" placeholder="Phone Number"/>
                            
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label for="email" md={2}>Email :</Label>
                            <Col md={8}>
                                <Control.text model='.email' className="form-control" id="email" name="email" placeholder="Email" />
                                
                            </Col>
                    </Row>
                    <Row className="form-group">
                            <Col md={{size:5, offset:2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox className="form-control" model=".agree" type="checkbox" name="agree"/> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                        </Col>
                            <Col md={3}>
                                <Control.select className="form-control" model=".contactType" name="contactType">
                                    <option>Phone</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <   Label for="feedback" md={2}>Feedback :</Label>
                            <Col md={8}>
                                <Control.textarea className="form-control" model=".textarea" id="feedback" name="feedback" placeholder="Type here for suggestions..." rows={10}/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{offset:2}}>
                                <Button outline md={{offset:2}}>
                                    Submit Feedback
                                </Button>
                            </Col>
                        </Row>
                </LocalForm>
            </div>
       </div>

    </div>
    );
    }
};
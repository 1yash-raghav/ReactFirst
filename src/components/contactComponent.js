import React, { Component } from 'react';
import Button from '../Button';
import {Form, FormGroup, FormFeedback, Label, Col, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMobile, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: '',
            agree: false,
            contactType: 'Phone',
            feedback: '',
            touched:{
                firstname: false,
                lastname: false,
                phonenumber: false,
                email: false,
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate(firstname, lastname, phonenumber, email) {
        const errors = {
            firstname: '',
            lastname: '',
            phonenumber: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.phonenumber && !reg.test(phonenumber))
            errors.phonenumber = 'Phone Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();   // Prevents reloading of the page after submission
    }
    
    render(){
        const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);
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
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="firstname" md={2}>First Name :</Label>
                        <Col md={3}>
                            <Input type="text" id="firstname" name="firstname" valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''} placeholder="First Name" value={this.state.firstname} onChange={this.handleInputChange} onBlur={this.handleBlur('firstname')}/>
                            <FormFeedback>{errors.firstname}</FormFeedback>
                        </Col>
                        <Label for="lastname" md={2}>Last Name :</Label>
                        <Col md={3}>
                            <Input type="text" id="lastname" valid={errors.lastname === ''}
                                        invalid={errors.lastname !== ''} name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleInputChange} onBlur={this.handleBlur('lastname')}/>
                            <FormFeedback>{errors.lastname}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="phonenumber" md={2}>Phone No. :</Label>
                        <Col md={8}>
                            <Input type="text" id="phonenumber" valid={errors.phonenumber === ''}
                                        invalid={errors.phonenumber !== ''} name="phonenumber" placeholder="Phone Number" value={this.state.phone} onChange={this.handleInputChange} onBlur={this.handleBlur('phonenumber')}/>
                            <FormFeedback>{errors.phonenumber}</FormFeedback>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="email" md={2}>Email :</Label>
                            <Col md={8}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email" value={this.state.email} valid={errors.email === ''}
                                        invalid={errors.email !== ''} onChange={this.handleInputChange} onBlur={this.handleBlur('email')}/>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                            <Col md={{size:5, offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox"
                                            name="agree"
                                            checked={this.state.agree}
                                            onChange={this.handleInputChange} /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}>
                                    <option>Phone</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                        <   Label for="feedback" md={2}>Feedback :</Label>
                            <Col md={8}>
                                <Input type="textarea" id="feedback" name="feedback"
                                    placeholder="Type here for suggestions..." rows={10} value={this.state.feedback} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{offset:2}}>
                                <Button outline md={{offset:2}}>
                                    Submit Feedback
                                </Button>
                            </Col>
                        </FormGroup>
                </Form>
            </div>
       </div>

    </div>
    );
    }
};
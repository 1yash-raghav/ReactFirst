/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import Button from '../Button';
import {BreadcrumbItem, Breadcrumb, Modal, ModalHeader, ModalBody, Row, Col, Label} from 'reactstrap';
import {LocalForm, Control, Errors} from 'react-redux-form';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenAlt} from "@fortawesome/free-solid-svg-icons";

export default class Dishcomments extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    };
    
    handleSubmit(values) {
        this.toggleModal();
        this.props.addComment(this.props.dish.id, values.rating, values.author, values.comment);
    }
    
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const cmnts = this.props.comments.map((commnts) => {
                return (
                    <ul key={commnts.id} className="list-unstyled">
                        <li>
                            <p> {commnts.comment} </p>
                            <p style={{color: '#F9A826'}}> -- {commnts.author},
                                &nbsp;
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(commnts.date)))}
                            </p>
                        </li>
                    </ul>
                );
            });
        return (
        <div className="container" style={{ color: '#FFFFFF', paddingTop: "10px" }}>
            <Breadcrumb style={{backgroundColor:"#000000"}}>
                        <BreadcrumbItem> <Link to='/home'>Home</Link> </BreadcrumbItem>
                        <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="row" style={{marginTop:50, marginBottom:80}}>
                        <div className="col-12 col-sm-5" style={{backgroundColor:"#F9A826", color:"#000000" , paddingTop:10, borderRadius: 20, justifyContent:'center'}}>
                            <img src={this.props.dish.image} alt="" style={{width:"300px", height:"300px", marginLeft:'15%'}} />
                            <hr/>
                            <h2>{this.props.dish.name}</h2>
                            <p>{this.props.dish.description}</p>
                        </div>
                        <div className="col-12 col-sm-6 offset-sm-1" style={{backgroundColor:"#000000", color:"#FFFFFF" , paddingTop:20}}>
                            <h1 style={{color:"#F9A826"}}>Comments</h1> <hr/>
                            {cmnts}
                        </div>
                        <div className="col-12 col-sm-5 offset-sm-8" style={{marginTop: 30}}>
                            <Button outline onClick={this.toggleModal}><FontAwesomeIcon icon={faPenAlt} /> Comment</Button>
                        </div>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}> Submit comment</ModalHeader>
                        <ModalBody>
                            <div className="col-12 col-md-10">
                                <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                                    <Row className="form-group">
                                        <Label md={3} htmlFor="rating">Rating :</Label>
                                        <Col md={7}>
                                            <Control.select model=".rating" name="rating" className="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Control.select>
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="author" md={3}>Name :</Label>
                                        <Col md={7}>
                                            <Control.text model=".author" id="author" name="author" placeholder="Author" className="form-control" validators={{ required, minLength: minLength(3), maxLength: maxLength(15) }} />
                                            <Errors className="text-danger" model=".author" show="touched" messages={{ required: 'Required', minLength: 'Must be greater than 3 characters', maxLength: 'Must be 15 charaters or less' }} />
                                        </Col>
                                    </Row>

                                    <Row className="form-group">
                                        <Label htmlFor="comment" md={3}>Comment:</Label>
                                        <Col md={7}>
                                            <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" validators={{ required }} />
                                            <Errors className="text-danger" model=".comment" show="touched" messages={{ required: 'Required' }} />
                                        </Col>
                                    </Row>

                                    <Button type="submit" value="submit" color="primary"><FontAwesomeIcon icon={faPenAlt} /> Submit</Button>
                                </LocalForm>
                            </div>
                        </ModalBody>
                        </Modal>
        </div>
    );
    }
};
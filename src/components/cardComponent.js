import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay, Badge} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
export default class Mycard extends Component {
    
    constructor(props) {
        super(props);
        this.state ={};
    }

    render(){
        return(
            <Card style={{ backgroundColor: '#F9A826', color: 'white', padding: '5px', marginTop: '80px', width: '250px'}}>
                <CardImg variant="top" src={this.props.imgSource} width="100%" height="40%"/>
                <CardImgOverlay>
                    <div className="row">
                        <h3><Badge pill style={{backgroundColor: 'rgb(200,0,0)'}}><FontAwesomeIcon icon={faRupeeSign} /> {this.props.price}</Badge></h3>
                        <h3><Badge pill style={{backgroundColor: 'rgb(0,150,0)'}}>{this.props.category}</Badge></h3>
                    </div>
                </CardImgOverlay>
                <CardBody className="border-top border-dark">
                    <CardTitle style={{color: '#000000'}}><h2>{this.props.cardTitle}</h2></CardTitle>
                    <CardText style={{color: '#000000'}}>{this.props.cardText}</CardText>
                </CardBody>
            </Card>
        );
    }
}
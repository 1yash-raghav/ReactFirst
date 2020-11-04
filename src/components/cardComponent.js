import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay, Badge} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
export default class Mycard extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            hovered: false
        };
    }

    onMouseOver = () => this.setState({ hovered: true });
    onMouseOut = () => this.setState({ hovered: false });

    render(){
        return(
            <Card onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} zDepth={this.state.shadow} hoverable style={{width:'18rem', backgroundColor: '#F9A826', marginTop:100, height: '30vw', transform: `${this.state.hovered ? 'scale(1.05)' : 'scale(1.0)'}`}}>
                <CardImg variant="top" src={this.props.imgSource} width="100%" height="45%"/>
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
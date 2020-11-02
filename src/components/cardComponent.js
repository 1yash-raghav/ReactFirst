import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay} from 'reactstrap';

export default class Mycard extends Component {
    
    constructor(props) {
        super(props);
        this.state ={};
    }

    render(){
        return(
            <Card style={{ backgroundColor: '#F9A826', color: 'white' }}>
                <CardImg variant="top" src={this.props.imgSource} width="100%"/>
                <CardImgOverlay>
                    <div className="row">
                        
                    </div>
                </CardImgOverlay>
                <CardBody>
                    <CardTitle><h2>{this.props.cardTitle}</h2></CardTitle>
                    <CardText>{this.props.cardText}</CardText>
                </CardBody>
            </Card>
        );
    }
}
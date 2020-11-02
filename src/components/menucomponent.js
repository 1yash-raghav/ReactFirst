import React, { Component } from 'react';
import Mycard from './cardComponent';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardGroup } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-sm" style={{display: 'flex'}}>
                <Mycard imgSource={dish.image} cardTitle={dish.name} cardText={dish.description}/>
              </div>
            );
        });

        return (
          <CardGroup style={{padding: 50, margin: 50}}>
            {menu}
          </CardGroup>
        );
    }
}

export default Menu;
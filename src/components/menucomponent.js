import React, { Component } from 'react';
import Mycard from './cardComponent';
import { CardGroup, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-sm" onClick={()=>this.props.onDishSelect(dish.id)}>
                <Link to={`/menu/${dish.id}`} style={{textDecoration: 'inherit'}}>
                  <Mycard dishID={dish.id} imgSource={dish.image} cardTitle={dish.name} cardText={dish.description} price={dish.price} category={dish.category}/>
              </Link>
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
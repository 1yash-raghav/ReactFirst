import React, { Component } from 'react';
import Mycard from './cardComponent';
import { CardGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from './loadingComponent';
import {baseUrl} from '../shared/baseUrl';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if(this.props.dishes.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }

        else if(this.props.dishes.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h3>{this.props.errMess}</h3>
                    </div>
                </div>
            );
        }
        else{
          const Menucards = this.props.dishes.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-sm" onClick={()=>this.props.onDishSelect(dish.id)}>
              <Link to={`/menu/${dish.id}`} style={{textDecoration: 'inherit'}}>
                  <Mycard dishID={dish.id} imgSource={baseUrl + dish.image} cardTitle={dish.name} cardText={dish.description} price={dish.price} category={dish.category}/>
              </Link>
              </div>
            );
        });
          return (
          <CardGroup style={{padding: 50, margin: 50}}>
            {Menucards}
          </CardGroup>
          );
        }
    }
}

export default Menu;
import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './homeComponent';
import DishDetail from './dishDetailComponent';
import AnimatedNav from './NavbarComponent';
import Carousel from './carouselComponent';
import {DISHES} from '../shared/dishes';
import Footer from './footerComponent';
import Contact from './contactComponent';
import {Switch , Route, Redirect} from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    return (
      <div style={{backgroundColor: "#000000"}}>
        <AnimatedNav />
        <Carousel />
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/contactus' component={Contact}/>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />}/>
          <Redirect to='./home'/>
        </Switch>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </ div>
    );
  }
}

export default Main;
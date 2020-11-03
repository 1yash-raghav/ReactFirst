import React, { Component } from 'react';
import Menu from './menuComponent';
import Home from './homeComponent';
import AnimatedNav from './NavbarComponent';
import Carousel from './carouselComponent';
import Footer from './footerComponent';
import Contact from './contactComponent';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';


const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
}
class Main extends Component {

  constructor(props) {
    super(props);
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
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} onDishSelect={this.onDishSelect.bind(this)} />}/>
          <Redirect to='./home'/>
        </Switch>
        <Footer />
      </ div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
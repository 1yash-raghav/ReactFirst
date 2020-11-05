import React, { Component } from 'react';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addComment } from '../redux/ActionCreators';

// Components imported

import Menu from './menuComponent';
import Home from './homeComponent';
import AnimatedNav from './NavbarComponent';
import Mycarousel from './carouselComponent';
import Footer from './footerComponent';
import Contact from './contactComponent';
import Dishcomments from './dishcommentsComponent';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments
  }
}

const mapDispatchToProps = dispatch => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDish: 0
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }  

  render() {
    return (
      <div style={{backgroundColor: "#000000"}}>
        <AnimatedNav />
        <Mycarousel />
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/menu/' component={() => <Menu dishes={this.props.dishes} onDishSelect={this.onDishSelect.bind(this)} />}/>
          <Route exact path='/menu/:id' component={()=><Dishcomments dish={this.props.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === this.state.selectedDish)} addComment={this.props.addComment}/>}/>
          <Route exact path='/contactus' component={Contact}/>
          <Redirect to='../home'/>
        </Switch>
        <Footer />
      </ div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
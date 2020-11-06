import React, { Component } from 'react';
import {Switch , Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { addComment, fetchDishes, fetchComments } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
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
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  fetchComments: () =>{ dispatch(fetchComments())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
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

  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
  }

  render() {
    return (
      <div style={{backgroundColor: "#000000"}}>
        <AnimatedNav />
        <Mycarousel />
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/menu/' component={() => <Menu dishes={this.props.dishes}  onDishSelect={this.onDishSelect.bind(this)} />}/>
          <Route exact path='/menu/:id' component={()=><Dishcomments isLoading={this.props.dishes.isLoading} errMess={this.props.dishes.errMess} dish={this.props.dishes.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} 
            comments={this.props.comments.comments.filter((comment) => comment.dishId === this.state.selectedDish)} 
            commentsErrMess = {this.props.comments.errMess} addComment={this.props.addComment}/>}/>
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
          <Redirect to='../home'/>
        </Switch>
        <Footer />
      </ div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
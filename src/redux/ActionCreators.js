import * as ActionTypes from './ActionTypes';  
import {baseUrl} from '../shared/baseUrl';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

export const fetchDishes =() => (dispatch) => {     // fetchDishes is a thunk that calls and disatch several actions
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl+'dishes')
        .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
        .then(response =>response.json())                 // handling promise
        .then(dishes => dispatch(addDishes(dishes)))                  //response.json() will be processed adn availabe here as dishes
        .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) =>({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments =() => (dispatch) => {     // fetchComments is a thunk that calls and disatch several actions
    return fetch(baseUrl+'comments')
        .then(response => {
            if(response.ok){
                return  response;
            }
            else{
                var error= new Error('Error '+ response.status + " : " + response.statusText);
                error.response = response;
                throw error;

            }
        }, 
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response =>response.json())                 // handling promise
        .then(comments => dispatch(addComments(comments)))   //response.json() will be processed adn availabe here as comments 
        .catch(error => dispatch(commentsFailed(error.message)));
        //3 set of promise handlers, response retured from one is sent to next.
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
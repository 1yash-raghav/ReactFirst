import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';    // Moved here because now Action Creator will provide the Dishes to the reducer

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
    setTimeout(()=>{
        dispatch(addDishes(DISHES));
    }, 2000);
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
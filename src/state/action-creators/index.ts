import { Dispatch } from 'redux';
import axios from 'axios';

import { Action } from '../actions';
import { ActionType } from '../action-types';

export const fetchUsersSuccess = (products: {}[]) => {
  return {
    type: ActionType.FETCH_PRODUCTS,
    payload: products,
  };
};

export const fetchUsersFailure = (error: any) => {
  return {
    type: ActionType.FETCH_FAILURE,
    payload: error,
  };
};

export const fetchProducts = () => {
  return (dispatch: Dispatch<Action>) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const products = response.data;
        dispatch(fetchUsersSuccess(products));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

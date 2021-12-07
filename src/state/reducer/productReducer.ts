import { Action } from '../actions';
import { ActionType } from '../action-types';

type ProductState = {
  products: [];
  error: string;
};
const initialState: ProductState = {
  products: [],
  error: '',
};

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS:
      return {
        products: action.payload,
        error: '',
      };
    case ActionType.FETCH_FAILURE:
      return {
        products: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

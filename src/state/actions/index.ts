import { ActionType } from '../action-types/index';

interface FetchProductsAction {
  type: ActionType.FETCH_PRODUCTS;
  payload: {}[];
}

interface FetchFailureAction {
  type: ActionType.FETCH_FAILURE;
  payload: {}[];
}
export type Action = FetchProductsAction | FetchFailureAction;

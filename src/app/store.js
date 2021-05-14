import {createStore, combineReducers} from 'redux';

import {inventoryReducer} from '../features/inventory/inventorySlice.js';
import {cartReducer} from '../features/cart/cartSlice.js';
import {currencyFilterReducer} from '../features/currencyFilter/currencyFilterSlice.js';
import {searchTermReducer} from '../features/searchTerm/searchTermSlice';

export const store = createStore(combineReducers({
  inventory: inventoryReducer,
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  searchTerm: searchTermReducer,
}));
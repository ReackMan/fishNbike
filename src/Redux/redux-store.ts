import {legacy_createStore as createStore, combineReducers} from 'redux';
import thunkMiddleware from "redux-thunk";
import orderReducer from "./order-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import productsReducer from "./products-reducer";

let reducers = combineReducers({
    order: orderReducer,
    products: productsReducer
});

let store = createStore(reducers);

export type AppStateType = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export default store;

// @ts-ignore
window.store = store;
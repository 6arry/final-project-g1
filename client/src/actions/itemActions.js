import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING }from './types';
import { tokenConfig } from './authActions';     // "tokenConfig" and "returnErrors" ADDED FOR LOGIN
import { returnErrors } from './errorActions';

export const getItems = () => dispatch => {
    dispatch(setItemsLoading());
    axios   
        .get('/api/items')
        .then(res => 
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            }))
            .catch(err => 
                dispatch(returnErrors(err.response.data, err.response.status))
            );
};

export const addItem = item => (dispatch, getState) => {
    axios
        .post('/api/items', item, tokenConfig(getState))          // "tokenConfig" ADDED FOR LOGIN
        .then(res => 
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteItem = id => (dispatch, getState) => {
    axios
        .delete(`/api/items/${id}`, tokenConfig(getState)).then(res =>          // "tokenConfig" ADDED FOR LOGIN
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        ).catch(err => 
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};
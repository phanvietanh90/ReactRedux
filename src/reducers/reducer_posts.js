import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

const defaultState = {

}

export default function (state = defaultState, action) {
    console.log('reducer...');
    switch (action.type) {
        case FETCH_POST:
        const post = action.payload.data;
        // const newState = {...state};
        // newState[post.id] = post;
        // return newState;
             return {...state, [post.id]: post};
            //  return action.payload.data;
        case FETCH_POSTS:
            console.log('fucking...');
            return _.mapKeys(action.payload.data, 'id');
        case DELETE_POST:
            console.log('deleting...');
            return _.omit(state, action.payload.data);
        default:
            return state;
    }
}
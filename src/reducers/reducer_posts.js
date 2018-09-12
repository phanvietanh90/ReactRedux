import { FETCH_POSTS } from '../actions';
import _ from 'lodash';
const defaultState = {

}
export default function (state = defaultState, action) {
    console.log("reducer......")
    switch (action.type) {
        case FETCH_POSTS:
            console.log('fucking...');

            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}
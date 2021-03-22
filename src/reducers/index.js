import { combineReducers } from 'redux';
import postsReducer from './postReducer';
import userReducer from './userReducer';

export default combineReducers({
    //dummy reducer ust to remove error in console.
    //replaceME : () => 'Hi There!'

    posts : postsReducer,
    users : userReducer
});
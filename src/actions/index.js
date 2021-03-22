import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

// BAD APPROACH!!!
// export const fetchPosts = async () => {
//     //BAD Approach!!!
//     const response = await jsonPlaceholder.get('/posts');

//     return{
//         type: 'FETCH_POSTS',
//         payload: response
//     };
// };

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS' , payload : response.data});
};

// export const fetchUser = (id) => async (dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER' , payload : response.data});
// };
// above code is equivalent to below code without using es2015 syntaxes.
// export const fetchUser = function(id){ 
//     return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER' , payload : response.data});
// }
// };

export const fetchUser = function(id){ 
    return function(dispatch) {
    _fetchUser(id, dispatch);
}
};

//memoize is used to call a request only once so if request user for id =1 and again if i will do,
// it will not create request again.

const _fetchUser = _.memoize(async (id,dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER' , payload : response.data});
});

//Non memoized way to solve above problem
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log("About to fetch the posts.");
    await dispatch(fetchPosts());
    console.log('fetched posts');

    // to get unique user id's from list of posts from the store using lodash.
    const user_ids = _.uniq(_.map(getState().posts, 'userId'));
    console.log(user_ids);

    user_ids.forEach(id => dispatch(fetchUser(id)));
}
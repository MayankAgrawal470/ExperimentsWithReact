export default (state = [] , action) => {
    // if(action.type === 'FETCH_POSTS'){
    //     return action.payload;
    // }

    // return state;

    // using switch fro above code
    switch(action.type){
        case 'FETCH_POSTS' : return action.payload;

        default : return state;
    }
} ;
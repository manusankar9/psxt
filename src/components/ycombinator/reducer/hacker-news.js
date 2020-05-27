import actions from '../actions-list';

let initialState = {
    hits:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.UPDATE_NEWS: return action.payload;
        
        default:return state;
    }
    
};

import actions from '../actions-list';

export default (payload) => {

    return {
        type: actions.UPDATE_UPVOTE,
        payload
    };

};

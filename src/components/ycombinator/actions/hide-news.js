import actions from '../actions-list';

export default (payload) => {

    return {
        type: actions.HIDE_NEWS,
        payload
    };

};

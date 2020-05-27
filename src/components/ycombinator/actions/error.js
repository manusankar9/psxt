import actions from '../actions-list';

export default (payload) => {

    return {
        type: actions.ERROR,
        payload
    };

};

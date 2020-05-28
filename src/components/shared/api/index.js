const ycombinatorApi = 'http://hn.algolia.com/api/v1/search';

export default (url, options = {}) => {

    const apiResponse = fetch(`${ycombinatorApi}${url}`)
        .then(resp => resp);

    return apiResponse;

};

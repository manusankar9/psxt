import fetchData from '../../shared/api';

export const getHackerNews = async(params) => {

    const myData = await fetchData(params);

    return myData.json();

};
//https://hn.algolia.com/api/v1/search?query=page=3
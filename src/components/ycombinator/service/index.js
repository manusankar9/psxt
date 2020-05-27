import fetchData from '../../shared/api';

export const getHackerNews = async() => {

    const myData = await fetchData('tags=front_page');

    return myData.json();

};

import Actions from './actions';
import HackerNews from './component';
import { connect } from 'react-redux';
import {getHackerNews} from './service';

const filterNews = (news) => {

    return {...news, hits: news.hits.filter(item => {

        return (typeof item.isVisible == 'undefined' && !item.isVisible);

    })};

};

const mapStateToProps = state => {

    return {

        hackerNews: filterNews(state.hackerNews.news)

    };

};

const mapDispatchToProps = (dispatch, props) => {

    return {

        getNews: async() => {

            const data = await getHackerNews();

            await dispatch(Actions.hackerNews(data));

        },
        upVote: newsObjId => {

            dispatch(Actions.upVote(newsObjId));

        },
        hideNews: newsObjId => {

            dispatch(Actions.hideNews(newsObjId));

        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);

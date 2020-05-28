import Actions from './actions';
import HackerNews from './component';
import { connect } from 'react-redux';
import {getHackerNews} from './service';

const filterNews = news => ({...news, hits: news.hits.filter(item => (typeof item.isVisible == 'undefined' && !item.isVisible))});

const mapStateToProps = state => ({

    hackerNews: filterNews(state.hackerNews.news)

});

const mapDispatchToProps = (dispatch, props) => {

    return {

        getNews: async(params) => {

            try {

                const data = await getHackerNews(params);

                await dispatch(Actions.hackerNews(data));

            } catch (e) {

                dispatch(Actions.error(e.message));

            }

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

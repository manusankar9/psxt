import HackerNews from './component';
import { connect } from 'react-redux';
import {getHackerNews} from './service';
import hackerNewsAction from './actions/hacker-news';

const mapStateToProps = state => {

    return {

        hackerNews: state.hackerNews.news

    };

};

const mapDispatchToProps = (dispatch, props) => {

    return {

        getNews: async() => {

            let data = await getHackerNews();

            await dispatch(hackerNewsAction(data));

        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);

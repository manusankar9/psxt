import Actions from './actions';
import HackerNews from './component';
import { connect } from 'react-redux';
import {getHackerNews} from './service';

const mapStateToProps = state => {

    return {

        hackerNews: state.hackerNews.news

    };

};

const mapDispatchToProps = (dispatch, props) => {

    return {

        getNews: async() => {

            let data = await getHackerNews();

            await dispatch(Actions.hackerNews(data));

        },
        upVote: (upVoteObj) => {

            dispatch(Actions.upVote(upVoteObj));

        }
    };

};

export default connect(mapStateToProps, mapDispatchToProps)(HackerNews);

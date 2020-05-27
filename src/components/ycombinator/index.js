import { connect } from "react-redux";
import HackerNews from './component';
import hackerNewsAction  from './actions/hacker-news';
import {getHackerNews} from './service';

    const mapStateToProps = state => ({
        
        hackerNews: state.hackerNews.news
    
    });

    const mapDispatchToProps = (dispatch, props) => ({
    
        getNews: async() =>{
        
            let data = await getHackerNews();

            await dispatch(hackerNewsAction(data));

        }
    });
    
export default connect(mapStateToProps, mapDispatchToProps)(HackerNews)
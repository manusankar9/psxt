import React, {useContext} from 'react';
import HaHakerNewscontext from '../../../ycombinator/component/haker-news-context';

export default (props) => {

    const Consumer = useContext(HaHakerNewscontext);

    console.log('>>Consumer', Consumer);

    return <div>
        <p>CommentsVote CountUp VoteNews Details {Consumer.name}</p>
        {props.children}
    </div>;

};

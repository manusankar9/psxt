import React, {useContext} from 'react';
import HakerNewscontext from '../../../ycombinator/component/haker-news-context';

export default ({objectID}) => {

    const Consumer = useContext(HakerNewscontext);

    return <>
        <p className = 'Upvote'
            onClick={

                () => {

                    return Consumer.upVote({objectID});

                }}
        >^</p>

    </>;

};

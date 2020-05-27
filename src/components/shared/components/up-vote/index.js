import HakerNewscontext from '../../../ycombinator/component/haker-news-context';
import React, {useContext} from 'react';

export default ({objectID}) => {

    const Consumer = useContext(HakerNewscontext);

    console.log(objectID,'Vote::', Consumer.upVote);

    return <div>
        <p
            onClick={

                ()=>Consumer.upVote({objectID})}
        >^</p>

    </div>;

};

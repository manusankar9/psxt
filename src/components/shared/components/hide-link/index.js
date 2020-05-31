import React, {useContext} from 'react';
import HakerNewscontext from '../../../ycombinator/component/haker-news-context';

export default ({objectID}) => {

    const Consumer = useContext(HakerNewscontext);

    return <>
        <li className = 'HideLink'
            onClick={

                () => {

                    return Consumer.hideNews({objectID});

                }}
        >[Hide]</li>

    </>;

};

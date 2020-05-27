import React, {useContext} from 'react';
import Graph from '../graph';
import HakerNewscontext from '../../../ycombinator/component/haker-news-context';
import Header from '../header';
import LineItem from '../news-line-item';
import Table from '../Table';

const BuildLinteItems = () => {

    const Consumer = useContext(HakerNewscontext);

    return Consumer.hits.map(item => {

        return <LineItem key={item.objectID} story = {item} />;

    });

};

export default () => {

    return <Table>
        <Header />
        <BuildLinteItems />
        <footer>Previous | Next</footer>
        <Graph />
    </Table>;

};
import './style.css';
import React, {useContext} from 'react';
import Graph from '../graph';
import HakerNewscontext from '../../../ycombinator/component/haker-news-context';
import Header from '../header';
import LineItem from '../news-line-item';
import { Link } from 'react-router-dom';
import Table from '../Table';

const BuildLinteItems = () => {

    const Consumer = useContext(HakerNewscontext);

    return Consumer.hits.map(item => {

        return (<div className = 'news-table-body'>
            <LineItem key={item.objectID} story = {item} />;
            </div>);

    });

};

export default () => {

    return <Table>

        <Header />
        <BuildLinteItems />
        <footer><Link to={'/search?tags=front_page'}>Previous</Link> | <Link to={`/search?query=page${2}`}>Next</Link> </footer>
        <Graph />
    </Table>;

};

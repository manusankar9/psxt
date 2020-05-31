import './style.scss';
import React, {useContext} from 'react';
import Graph from '../graph';
import HakerNewscontext from '../../../ycombinator/component/haker-news-context';
import Header from '../header';
import LineItem from '../news-line-item';
import { Link } from 'react-router-dom';
import Table from '../Table';

const BuildLinteItems = () => {

    const Consumer = useContext(HakerNewscontext);

    return Consumer.hits.map(item => <LineItem key={item.objectID} story = {item} />);

};

export default () => <div>
    <Table>
        <Header />
        <BuildLinteItems />
        <footer className='nav-pre-next'>
            <Link to={'/search?tags=front_page'} className = 'prev'>Previous</Link> | <Link to={`/search?query=page${2}`} className = 'next'>Next</Link>
        </footer>
        <Graph />
    </Table>;
</div>;


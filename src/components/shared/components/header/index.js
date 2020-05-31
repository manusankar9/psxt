// import './style.css';
import './style-guides/stylesHeader.scss';
import React from 'react';

export default (props) => {

    return <header>
        <ul className = 'news-table-header'>
            <li className = 'li1'>Comments</li>
            <li className = 'li2'><li>Vote</li><li>Count</li></li>
            <li className = 'li3'>UpVote</li>
            <li className = 'li4'>News Details</li>
        </ul>
        {props.children}
    </header>;

};

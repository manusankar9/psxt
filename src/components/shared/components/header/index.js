import './style.css';
import React from 'react';

export default (props) => {

    return <div>
        <div className = 'news-table'>
            <div className = 'div1'>Comments</div>
            <div className = 'div2'><div>Vote</div><div>Count</div></div>
            <div className = 'div3'>UpVote</div>
            <div className = 'div4'>News Details</div>
        </div>
        {props.children}
    </div>;

};

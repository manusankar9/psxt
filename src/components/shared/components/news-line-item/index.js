/* eslint-disable camelcase */
import NewsText from '../news-details-text';
import React from 'react';
import Votes from '../vote';
import Upvote from '../up-vote';


const HideLink = () => {

    return <div>[Hide]</div>;

};

const Author = ({newsAuthor}) => {

    return <div>{newsAuthor}</div>;

};
const ElapsedText = ({time}) => {

    return <div> {time} ago</div>;

};

const CommentCount = ({count})=>{
    return <div>{count}</div>
}

export default ({story}) => {

    const {author, created_at, title, points, num_comments, objectID} = story;

    return <div>
        <CommentCount count = {num_comments}/>
        <Votes count = {points}/>
        <Upvote objectID = {objectID}/>
        <NewsText newsTitle = {title}/>
        <ElapsedText time ={created_at} />
        <Author newsAuthor = {author}/>
        <HideLink />
    </div>;

};

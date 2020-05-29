import './style.css';
import HideLink from '../hide-link';
import NewsText from '../news-details-text';
import React from 'react';
import Upvote from '../up-vote';
import Votes from '../vote';

const Author = ({newsAuthor}) => {

    return <li className = 'Author'>{newsAuthor}</li>;

};
const ElapsedText = ({time}) => {

    return <li className = 'ElapsedText'> {time} ago</li>;

};

const CommentCount = ({count}) => {

    return <li className = 'CommentCount'>{count}</li>;

};

const Url = ({url}) => {

    return <a className = 'Url'>{url}</a>;

};

export default ({story}) => {

    const {author, created_at, title, points, num_comments, objectID, url} = story;

    return <article className = 'storyContainer'>
        <CommentCount count = {num_comments}/>
        <Votes count = {points}/>
        <Upvote objectID = {objectID}/>
        <NewsText newsTitle = {title}/>
        <div className = 'linkContainer'>
            <ul className = 'linkContainer'>
                <nav>
                    <Url url = {url}/>
                </nav>
                <Author newsAuthor = {author}/>
                <ElapsedText time ={created_at} />
                <HideLink objectID = {objectID}/>
            </ul>
        </div>
    </article>;

};

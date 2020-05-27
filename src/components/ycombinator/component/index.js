import React, { Component } from 'react';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews();

    }

    clickedItem = (objectID) => {

        this.props.upVote({objectID});

    }

    render() {

        return (
            <div>
                Hacker News welcome
                <div className='Header'>
                    <span>Comments</span>
                    <span>Vote Count</span>
                    <span>Up Vote</span>
                    <span>News Details</span>
                </div>
                <div>-body--</div>
                {this.props.hackerNews.hits.map(item => {

                    return <div className='news-story' key={item.objectID}>
                        <span>{item.num_comments}::</span>
                        <span>{item.points}</span>
                        <span onClick={() => {

                            this.clickedItem(item.objectID);

                        }}>^</span>
                        <span className='news-title'>{item.title}</span>
                        <span>{item.url}</span>
                        <span className='nes_meta' >by {item.author}</span>
                        <span >{item.created_at_i} agooo</span>
                        <span >[hide]</span>
                    </div>;

                })}
            </div>
        );

    }

}

import React, { Component } from 'react';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews();

    }

    clickedItem = (objectID) => {

        this.props.upVote({objectID});

    }

    render() {

        console.log('prpos', this.props.hackerNews);
        const dummy = {
            hits: [
                {
                    created_at: '2020-05-26T10:23:44.000Z',
                    title: 'AWS services explained in one line each',
                    url: 'https://adayinthelifeof.nl/2020/05/20/aws.html',
                    author: 'jaytaph',
                    points: 1387,
                    story_text: null,
                    comment_text: null,
                    num_comments: 308,
                    story_id: null,
                    story_title: null,
                    story_url: null,
                    parent_id: null,
                    created_at_i: 1590488624,
                    _tags: [
                        'story',
                        'author_jaytaph',
                        'story_23309269',
                        'front_page'
                    ],
                    objectID: '23309269',
                    _highlightResult: {
                        title: {
                            value: 'AWS services explained in one line each',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        url: {
                            value: 'https://adayinthelifeof.nl/2020/05/20/aws.html',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        author: {
                            value: 'jaytaph',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    }
                }, {
                    created_at: '2020-05-26T10:23:44.000Z',
                    title: 'React js services explained in one line each',
                    url: 'https://adayinthelifeof.nl/2020/05/20/aws.html',
                    author: 'siva',
                    points: 13,
                    story_text: null,
                    comment_text: null,
                    num_comments: 21,
                    story_id: null,
                    story_title: null,
                    story_url: null,
                    parent_id: null,
                    created_at_i: 1590488624,
                    _tags: [
                        'story',
                        'author_jaytaph',
                        'story_23309269',
                        'front_page'
                    ],
                    objectID: '23309270',
                    _highlightResult: {
                        title: {
                            value: 'AWS services explained in one line each',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        url: {
                            value: 'https://adayinthelifeof.nl/2020/05/20/aws.html',
                            matchLevel: 'none',
                            matchedWords: []
                        },
                        author: {
                            value: 'jaytaph',
                            matchLevel: 'none',
                            matchedWords: []
                        }
                    }
                }
            ]
        };

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

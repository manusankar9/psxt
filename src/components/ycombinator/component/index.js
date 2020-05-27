import React, { Component } from 'react';
import HakerNews from './haker-news-context';
import Table from '../../shared/components/news-story';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews();

    }

    render() {

        const {hackerNews: {hits}, upVote} = this.props;

        return (
            <>
                <HakerNews.Provider value={{upVote, hits}}>
                    <Table />
                </HakerNews.Provider>
            </>
        );

    }

}

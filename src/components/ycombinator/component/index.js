import React, { Component } from 'react';
import HakerNews from './haker-news-context';
import Table from '../../shared/components/news-story';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews('?tags=front_page');

    }
    componentWillReceiveProps(preProps) {

        if (preProps.location.search !== this.props.location.search) {

            this.props.getNews(preProps.location.search);

        }

    }

    render() {

        const {hackerNews: {hits}, upVote, hideNews} = this.props;

        return (
            <>
                <HakerNews.Provider value={{upVote, hits, hideNews}}>
                    <Table />
                </HakerNews.Provider>
            </>
        );

    }

}

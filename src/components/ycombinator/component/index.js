import React, { Component } from 'react';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews();

    }
    componentWillUnmount() {

    }

    render() {

        console.log(':::hackerNews:::', this.props.hackerNews.hits);

        return (
            <div>
                Hacker News welcome
            </div>
        );

    }

}

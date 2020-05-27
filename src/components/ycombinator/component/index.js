import React, { Component } from 'react';

export default class Ycombinatore extends Component {

    componentWillMount() {

        this.props.getNews();

    }
    componentWillUnmount() {

    }

    render() {

        return (
            <div>
                Hacker News welcome
            </div>
        );

    }

}

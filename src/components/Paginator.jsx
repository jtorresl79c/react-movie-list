import React, { Component } from 'react';

export default class Paginator extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const numberOfPages = this.props.numberOfPages
        const actualPage = this.props.actualPage
        const pages = []
        for (let index = 0; index < numberOfPages; index++) {
            let pageLoop = index + 1
            pages.push(<li key={pageLoop} className={"page-item" + (actualPage === pageLoop ? " active" : '')}><a className="page-link" href="#">{pageLoop}</a></li>)
        }

        return (
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {pages}
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
        )
    }
}

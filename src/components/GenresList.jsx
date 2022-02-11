import React, { Component } from 'react'

export default class GenresList extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const genres = this.props.genres
        const actualGenreId = this.props.actualGenreId
        const updateActualGenreId = this.props.updateActualGenreId
        return (
            <ul className="list-group">
                {/* <li class="list-group-item active" aria-current="true">An active item</li>
                <li class="list-group-item">A second item</li> */}
                <li onClick={ () => updateActualGenreId('all') } className={"list-group-item pointer" + ( 'all' === actualGenreId ? ' active' : '' )}>All</li>
                {
                    genres.map( genre => <li onClick={ () => updateActualGenreId(genre._id) } className={"list-group-item pointer" + ( genre._id === actualGenreId ? ' active' : '' )} key={genre._id}>{genre.name}</li> )
                }
            </ul>
        )
    }
}

import React, { Component } from 'react';
import bi from 'bootstrap-icons/font/bootstrap-icons.css';

export default class Movies extends Component {

    constructor(props) {
        super(props)
        this.raiseSort = this.raiseSort.bind(this)
    }

    raiseSort(title){
        console.log(title)
        const sortedBy = { ...this.props.sortedBy } // Con esto se hace una copia del obj y no una referencia a que si lo pusieramos como = this.props.sortedBy
        
        const handleSort = this.props.handleSort

        sortedBy.title = title

        sortedBy.orderBy = sortedBy.orderBy === 'asc' ? 'desc' : 'asc'

        handleSort(sortedBy)
    }



    render() {
        // const movies = this.props.movies
        // const deleteMovie = this.props.deleteMovie
        const raiseSort = this.raiseSort
        const { movies, deleteMovie } = this.props

        return (
            <table className='table table-stripped table-hover w-100'>
                <thead>
                    <tr>
                        <th scope="col" className='pointer' onClick={() => raiseSort('title') }>Title</th>
                        <th scope="col" className='pointer' onClick={() => raiseSort('genre') }>Genre</th>
                        <th scope="col" className='pointer' onClick={() => raiseSort('numberInStock') }>Stock</th>
                        <th scope="col" className='pointer' onClick={() => raiseSort('dailyRentalRate') }>Rate</th>
                        <th scope="col" className=''></th>
                        <th scope="col" className=''></th>
                    </tr>
                </thead>


                <tbody>
                    {
                        movies.map(movie => (
                            <tr key={movie._id}>
                                <th scope="row">{movie.title}</th>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <i className="bi bi-heart"></i>
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={ () => deleteMovie(movie._id) }>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        );
    }
}

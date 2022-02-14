import React, { Component } from 'react';
import bi from 'bootstrap-icons/font/bootstrap-icons.css';

export default class Movies extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        // const movies = this.props.movies
        // const deleteMovie = this.props.deleteMovie

        const { movies, deleteMovie } = this.props

        return (
            <table className='table table-stripped table-hover w-100'>
                <thead>
                    <tr>
                        <th scope="col" className='bg bg-primary pointer'>Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
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

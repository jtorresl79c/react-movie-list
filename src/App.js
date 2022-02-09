import React, { Component } from 'react';
import { getMovies } from './services/fakeMovieService';
import Movies from './components/Movies';
import Paginator from './components/Paginator';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: getMovies(),
            moviesPerPage: 3,
            actualPage: 4
        }

    }

    render() {
        
        const movies = this.state.movies

        const moviesLength = movies.length
        const moviesPerPage = this.state.moviesPerPage

        const numberOfPages = Math.ceil(moviesLength/moviesPerPage)
        const actualPage = this.state.actualPage
        // console.log(numberOfPages)

        const start = (actualPage - 1) * moviesPerPage;
        const end = (actualPage * moviesPerPage) - 1;

        console.log(start)
        console.log(end)

        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Movies movies={movies}></Movies>
                        <Paginator numberOfPages={numberOfPages} actualPage={actualPage}></Paginator>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
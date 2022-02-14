import Styles from './styles.css'

import React, { Component } from 'react';
import { getMovies, deleteMovie } from './services/fakeMovieService';
import { getGenres } from './services/fakeGenreService'
import Movies from './components/Movies';
import Paginator from './components/Paginator';
import GenresList from './components/GenresList';
import MoviesStatus from './components/MoviesStatus';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: getMovies(),
            genres: getGenres(),
            moviesPerPage: 2,
            actualPage: 1,
            actualGenreId: 'all'
        }
        this.updateActualPage = this.updateActualPage.bind(this)
        this.updateActualGenreId = this.updateActualGenreId.bind(this)
        this.deleteMovie = this.deleteMovie.bind(this)
    }

    componentDidMount(){
        this.setState({  })
    }

    updateActualGenreId(id){
        this.setState({actualGenreId: id, actualPage: 1})
    }

    updateActualPage(pageNumber){
        this.setState({ actualPage: pageNumber })
    }

    deleteMovie(id){
        deleteMovie(id)
        this.setState({ movies: getMovies() })
    }

    render() {
        // const actualGenreId = this.state.actualGenreId
        // const genres = this.state.genres
        // const moviesPerPage = this.state.moviesPerPage
        // const actualPage = this.state.actualPage
        // let movies = this.state.movies

        const { actualGenreId, genres, moviesPerPage, actualPage } = this.state
        let { movies } = this.state

        const { updateActualPage, updateActualGenreId, deleteMovie } = this
        
        if(actualGenreId != 'all'){
            movies = movies.filter( movie => movie.genre._id == this.state.actualGenreId)
        }

        const moviesLength = movies.length

        const numberOfPages = Math.ceil(moviesLength/moviesPerPage)
        
        // Si estas en la ultima pagina y los eliminas todos, el acutalPage seguira igual, por lo que mostrara una pagina no existente
        if(numberOfPages < actualPage){
            this.setState({actualPage: numberOfPages})
        }
        // console.log(numberOfPages)

        const start = (actualPage - 1) * moviesPerPage;
        const end = (actualPage * moviesPerPage);

        const moviesFiltered = movies.slice(start,end)

        // const updateActualPage = this.updateActualPage
        // const updateActualGenreId = this.updateActualGenreId
        // const deleteMovie = this.deleteMovie

        // console.log(start)
        // console.log(end)
        // console.log(movies)
        // console.log(movies.slice(start,end))

        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-2">
                        <GenresList genres={genres} actualGenreId={actualGenreId} updateActualGenreId={updateActualGenreId}></GenresList>
                    </div>
                    <div className="col">
                        <MoviesStatus moviesLength={moviesLength}></MoviesStatus>
                        <Movies movies={moviesFiltered} deleteMovie={deleteMovie}></Movies>
                        <Paginator numberOfPages={numberOfPages} actualPage={actualPage} updateActualPage={updateActualPage}></Paginator>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
import React from 'react'

export default function MoviesStatus(props) {
    const { moviesLength } = props
    return (
        <p>{moviesLength} movies remaining</p>
    )
}

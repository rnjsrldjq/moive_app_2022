import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({title,year,summary,poster,genres}) {

    return (
        <div className='movie'>
            <img src={poster} alt={title} />

                 <div className = "movie_data">
                <h2 className="movie_title"style={{backgroundColor: '#8a2be2'}}>{title}</h2>
                <h3 className="movie_year">{year}</h3>
                <u1 className="movie_genres">
                    {genres.map((genre,index)=> {
                        return <li key={index} className="movie_genre">{genre}</li>
                    })}
                </u1>
                <p className="movie_summary">{summary}</p>
                </div></div>
                 );                
}

Movie.propTypes= { 
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,

};

export default Movie;

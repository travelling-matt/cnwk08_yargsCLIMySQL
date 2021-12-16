const sequelize = require("../db/connection");
const { DataTypes, INTEGER, STRING } = require("sequelize"); // use {} to reduce code by not having to drill in by dotNotation

//3 tables: actors, genres and movies. primary keys of actors and genres used as foreign key in movies. think of actor/movie relationship as <movie_title> starring <actor>. One actor can star in more than one movie, but a movie only has one star actor.
//don't forget , between objects.

const actor = sequelize.define("actor", {
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

const genre = sequelize.define("genre", {
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const movie = sequelize.define("movie", {
    movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

//creates a column in movie table 'actorid' using the actors table primary key 'id' as a foreign key
actor.hasMany(movie);
//creates a column in movie table 'genreid' using the genre table primary key 'id' as a foreign key
genre.hasMany(movie);

module.exports =  { movie, actor, genre };

// actor, genre, user,
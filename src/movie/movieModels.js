const sequelize = require("../db/connection");
const { DataTypes, INTEGER, STRING } = require("sequelize"); // use {} to reduce code by not having to drill in by dotNotation

//creates table called movies with the movie_id, movie_title, actor_id, genre_id, user_id columns.
//don't forget , between objects.

const actor = sequelize.define("actor", {
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

const genre = sequelize.define("genre", {
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

// const user = sequelize.define("user", {
//     user_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// })

const movie = sequelize.define("movie", {
    movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // not needed hasMany defined below
    // actor_id: {
    //     type: DataTypes.INTEGER,
    //     references: {       //foreign key reference to ids on other tables
    //         model: 'actor',
    //         key: 'id',
    //     }
    // },
    // genre_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: genre,
    //         key: 'genre_id',
    //     }
    // },
    // user_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: user,
    //         key: 'user_id',
    //     }
    // },
});

//creates a column in movie table 'actorid' using the actors table primary key 'id' as a foreign key
actor.hasMany(movie);
genre.hasMany(movie);

module.exports =  { movie, actor, genre };

// actor, genre, user,
const sequelize = require("../db/connection");
const { DataTypes, INTEGER, STRING } = require("sequelize"); // use {} to reduce code by not having to drill in by dotNotation

//creates table called movies with the movie_id, movie_title, actor_id, genre_id, user_id columns.
//don't forget , between objects.


// const actor = sequelize.define("actor", {
//     // actor_id: {
//     //     type: DataTypes.INTEGER,
//     //     allowNull: false,
//     //     primaryKey: true,        
//     // },
//     actor: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// })

// const genre = sequelize.define("genre", {
//     genre_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,        
//     },
//     genre: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// })

// const user = sequelize.define("user", {
//     user_id: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,        
//     },
//     user_name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// })

const movie = sequelize.define("movie", {
    movie_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        //allowNull: false, //allowNull defaults to true so only need this is field required
        primaryKey: true,
        //defaultValue: '',
    },
    movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // actor_id: {
    //     type: DataTypes.INTEGER,
    //     references: {       //foreign key reference to ids on other tables
    //         model: actor,
    //         //key: 'actor_id',
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

module.exports =  movie;

// actor, genre, user,
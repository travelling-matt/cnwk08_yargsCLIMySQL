const sequelize = require("../db/connection");
const { DataTypes, INTEGER } = require("sequelize"); // use {} to reduce code by not having to drill in by dotNotation

//creates table called Movies with the movie_id, movie_title, actor_id, genre_id, user_id columns.
//don't forget , between objects.

const movie = sequelize.define("movie", {
    movie_id: {
        type: DataType.INTEGER,
        allowNull: false, //allowNull defaults to true so only need this is field required
        primaryKey: true,
    },
    movie_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    actor_id: {
        type: DataType.INTEGER,
        references: {       //foreign key reference to ids on other tables
            model: actor,
            key: 'actor_id',
        }
    },
    genre_id: {
        type: DataType.INTEGER,
        references: {
            model: genre,
            key: 'genre_id',
        }
    },
    user_id: {
        type: DataType.INTEGER,
        references: {
            model: user,
            key: 'user_id',
        }
    },
});

const actor = sequelize.define("actor", {
    actor_id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,        
    },
    actor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const genre = sequelize.define("genre", {
    genre_id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,        
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

const user = sequelize.define("user", {
    user_id: {
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,        
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = Movie;
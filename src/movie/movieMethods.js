const {
    movie,
    actor,
    genre
} = require("./movieModels");

exports.addActor = async (movieObj) => {
    try {
        await actor.sync({
            alter: true
        });
        const actorName = await actor.create(movieObj);
        console.log(`added: ${movieObj.actor}`);
        //return actorName;
    } catch (error) {
        console.log(error);
    }
};

exports.addGenre = async (movieObj) => {
    try {
        await genre.create(movieObj);
        console.log(`added: ${movieObj.genre}`);
    } catch (error) {
        console.log(error);
    }
};

exports.addMovie = async (movieObj) => {
    try {
        //await movie.sync({alter:true}); //creates table if doesn't aready exist - now in app.js.
        const actor_id = await actor.findOne({
            where: {
                actor: movieObj.actor
            }
        }); //find the actor and store PK in actor_id to be used as FK in movies table.
        //console.log(actor_id);
        //console.log(actor_id.id);
        const genre_id = await genre.findOne({
            where: {
                genre: movieObj.genre
            }
        }); //find the genre and store PK in genre_id to be used as FK in moveis table.
        await movie.create({
            movie_title: movieObj.movie_title,
            actorId: actor_id.id,
            genreId: genre_id.id
        }); //create movie based on movie_title using actor.id and genre.id primary keys as foreign keys in the movies table.
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        //console.log(await movie.findAll({})); //find all may need () or ({})
        for (let movies of await movie.findAll({})) {
            //include: {all:true}
            //include: actor, include: genre
            //const actor_id = movies.actorId
            //console.log(`title: ${movies.movie_title} actor: ${movies.actorId} genre: ${movies.genreId}`);
            console.log(`${movies}`)
        }


        // SELECT title, actor, genre
        // FROM movies
        // JOIN actors ON actors.id = movies.actor_id
        // JOIN genres ON genres.id = movies.genre_id
        // WHERE actor = "Sean Connery"
        // ORDER BY title ASC
        // LIMIT 3;

        //console.log(await actor.findAll({}));
        //console.log(await genre.findAll({}));
    } catch (error) {
        console.log(error)
    }
};

exports.listActors = async () => {
    try {
        const list = await actor.findAll({
            include: [{
                model: movie,
                attributes: ['movie_title']
            }],
            attributes: ['actor']
        });
        console.log(JSON.stringify(list, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.listGenres = async () => {
    try {
        const list = await genre.findAll({
            include: [{
                model: movie,
                attributes: ['movie_title']
            }],
            attributes: ['genre']
        });
        console.log(JSON.stringify(list, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await movie.update({
            'movie_title': movieObj.newTitle
        }, {
            where: {
                'movie_title': movieObj.title
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await movie.destroy({
            where: {
                'movie_title': movieObj.title
            }
        });
        console.log(`${movieObj.title} deleted`)
    } catch (error) {
        console.log(error);
    }
};

exports.updateVariable = async (movieObj) => {
    try {
        const tbl = movieObj.table;
        console.log(tbl);
        if (tbl == 'movie') {
            await movie.update({
                [movieObj.change]: movieObj.newValue
            }, {
                where: {
                    [movieObj.change]: movieObj.currentValue
                }
            });
            console.log(await movie.findAll({}));
        } else if (tbl == 'actor') {
            await actor.update({
                [movieObj.change]: movieObj.newValue
            }, {
                where: {
                    [movieObj.change]: movieObj.currentValue
                }
            });
            console.log(await actor.findAll({}));
        } else if (tbl == 'genre') {
            await genre.update({
                [movieObj.change]: movieObj.newValue
            }, {
                where: {
                    [movieObj.change]: movieObj.currentValue
                }
            });
            console.log(await genre.findAll({}));
        };
    } catch (error) {
        console.log(error);
    }
};

exports.dropAll = async () => {
    try {
        await movie.drop();
        await actor.drop();
        await genre.drop();
        console.log("tables dropped: actor, genre, movie");
    } catch (error) {
        console.log(error);
    }
};

exports.dropMovies = async () => {
    try {
        await movie.drop();
        console.log("table dropped: movies")
    } catch (error) {
        console.log(error);
    }
};

//WIP
// exports.dropOne = async (movieObj) => {
//     try {

//         const dropTable =  movieObj.table;

//         console.log(dropTable);
//         await dropTable.drop();
//         // await actor.drop();
//         // await genre.drop();
//     } catch (error) {
//         console.log(error);
//     }
// };
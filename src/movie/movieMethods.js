const { movie, actor, genre } = require("./movieModels");

exports.addActor = async (movieObj) => {
    try {
        // actor.drop();
        // movie.drop();
        //await actor.sync({alter:true});
        const actor = await actor.create(movieObj);
        return actor;
    } catch (error) {
      console.log(error);  
    }
};

exports.addGenre = async (movieObj) => {
    try {
        // actor.drop();
        // movie.drop();
        // genre.drop()
        //await genre.sync({alter:true});
        await genre.create(movieObj);
    } catch (error) {
      console.log(error);  
    }
};

exports.addMovie = async (movieObj) => {
    try {
        //movie.drop();
        //await movie.sync({alter:true}); //creates table if doesn't aready exist
        const actorid = await actor.findOne({where: {actor:movieObj.actor}}); //find the actor and store info in actorid
        const genreid = await genre.findOne({where: {genre:movieObj.genre}}); //find the genre and store info in genreid
        await movie.create({movie_title: movieObj.movie_title, actor_id:actorid.id, genre_id:genreid.id}); //create movie based on movie title supplied and link to actor through actorid
    } catch (error) {
      console.log(error);  
    }
};

exports.listMovies = async () => {
    try {
        //console.log(await movie.findAll({})); //find all may need () or ({})
        for (let movies of await movie.findAll({})){
            console.log(`title: ${movies.movie_title} actor: ${movies.actor_id} genre: ${movies.genre_id}`);
        }
        //console.log(await actor.findAll({}));
        //console.log(await genre.findAll({}));
    } catch (error) {
        console.log(error)
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await movie.update({ 'movie_title': movieObj.newTitle }, { where: {'movie_title': movieObj.title } });
    } catch (error){
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await movie.destroy( { where: { 'movie_title': movieObj.title }});
        console.log(`${movieObj.title} deleted`)
    } catch (error){
        console.log(error);
    }
};

exports.updateVariable = async (movieObj) => {
    try {
        //const tbl = [movieObj.table];
        // await tbl.update(
        //     { [movieObj.change]: movieObj.newValue }, 
        //     { where: { [movieObj.change]: movieObj.currentValue } }
        //     );
        await movie.update(
            { [movieObj.change]: movieObj.newValue }, 
            { where: { [movieObj.change]: movieObj.currentValue } }
            );
        console.log(await movie.findAll({}));
    } catch (error){
        console.log(error);
    }
};
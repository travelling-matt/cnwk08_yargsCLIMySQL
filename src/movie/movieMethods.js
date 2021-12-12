const { movie, actor, genre } = require("./movieModels");

exports.addActor = async (movieObj) => {
    try {
        // actor.drop();
        // movie.drop();
        await actor.sync();
        await actor.create(movieObj);
    } catch (error) {
      console.log(error);  
    }
};

exports.addGenre = async (movieObj) => {
    try {
        // actor.drop();
        // movie.drop();
        // genre.drop()
        await genre.sync();
        await genre.create(movieObj);
    } catch (error) {
      console.log(error);  
    }
};

exports.addMovie = async (movieObj) => {
    try {
        //movie.drop();
        await movie.sync(); //creates table if doesn't aready exist
        const actorid = await actor.findOne({where: {actor:movieObj.actor}})//find the actor and store info in actorid
        const genreid = await genre.findOne({where: {genre:movieObj.genre}})//find the genre and store info in genreid
        
        await movie.create({movie_title: movieObj.movie_title, actor_id:actorid.id, genre_id:genreid.id});//create movie based on movie title supplied and link to actor through actorid

        // await genre.sync();
        // await genre.create(movieObj.genre);
        // await user.sync();
        // await user.create(movieObj.user);
        //e.g. with Obj await Movie.create(movieObj)
        //e.g. with Obj return `Successfully created ${movieObj.title}`
        //e.g. await Movie.create({title: "Spiderman", actor: "Andrew Garfield"})
        //e.g. return `Successfully created movie`
        

    } catch (error) {
      console.log(error);  
    }
};

exports.listMovies = async () => {
    try{
        console.log(await movie.findAll({})); //find all may need () or ({})
        console.log(await actor.findAll({}));
        console.log(await genre.findAll({}));
    } catch (error) {
        console.log(error)
    }
};

exports.updateMovie = async (movieObj) => {
    try{
        await movie.update({ 'movie_title': movieObj.newTitle }, { where: {'movie_title': movieObj.title } });
    } catch (error){
        console.log(error);
    }
};

exports.deleteMovie = async (movieObj) => {
    try{
        await movie.destroy( { where: { 'movie_title': movieObj.title }});
        console.log(`${movieObj.title} deleted`)
    } catch (error){
        console.log(error);
    }
};
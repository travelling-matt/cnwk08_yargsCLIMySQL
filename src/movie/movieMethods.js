const movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await movie.sync(); //creates table if doesn't aready exist
        await movie.create(movieObj);
        // await actor.sync();
        // await actor.create(movieObj);
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
}

exports.listMovies = async () => {
    try{
        console.log(await movie.findAll({})); //find all may need () or ({})
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
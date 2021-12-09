const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.sync(); //creates table if doesn't aready exist
        await Movie.create(movieObj);
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
        console.log(await Movie.findAll({})); //find all may need () or ({})
    } catch (error) {
        console.log(error)
    }
};
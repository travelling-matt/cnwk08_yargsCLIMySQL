require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie, addActor, addGenre } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]){
        case "add movie":
            addMovie({ movie_title:args.movie_title, actor:args.actor, genre:args.genre}); 
            // await addMovie({ movie_title:args.movie_title });        
        break;
        case "add actor":
            addActor({ actor:args.actor });   
        break;
        case "add genre":
            addGenre({ genre:args.genre });   
        break;
        case "list":
            listMovies();
        break;
        case "update":
            updateMovie({ title:args.title, newTitle:args.newTitle });
        break;
        case "delete":
            deleteMovie({ title:args.title });
        break;
        default:
            console.log("Incorrect command");
        break;    
    }
};

app(yargs.argv);
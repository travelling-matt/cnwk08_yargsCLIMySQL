require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie, addActor, addGenre, updateVariable, dropAll, dropMovies, listActors, listGenres } = require("./movie/movieMethods");

const { actor, genre, movie } = require("./movie/movieModels");

const app = async (args) => {
    await actor.sync({alter:true});
    await genre.sync({alter:true});
    await movie.sync({alter:true});
    switch (process.argv[2]){
        case "add movie":
            addMovie({ 
                movie_title:args.movie_title, 
                actor:args.actor, 
                genre:args.genre 
            });       
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
        case "listGenres":
            listGenres();
        break;
        case "listActors":
            listActors();
        break;
        case "update":
            updateMovie({ 
                movie_title:args.title, 
                newTitle:args.newTitle 
            });
        break;
        case "delete":
            deleteMovie({ title:args.title });
        break;
        case "update variable":
            updateVariable({ 
                table: args.table,
                change: args.change,
                currentValue: args.currentValue,
                newValue: args.newValue 
            });
        break;
        case "dropAll":
            dropAll();
        break;
        case "dropMovies":
            dropMovies();
            break;
        // case "dropOne":
        //     dropOne({
        //         table: args.table
        //     });
        // break;
        default:
            console.log("Incorrect command");
        break;    
    }
};

app(yargs.argv);
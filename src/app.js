require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");

const app = async (args) => {
    switch (process.argv[2]){
        case "add":
            addMovie({ movie_title:args.movie_title, movie_id:args.movie_id }); 
            // await addMovie({ movie_title:args.movie_title });        
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
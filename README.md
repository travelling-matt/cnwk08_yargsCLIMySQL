# cnwk08_yargsCLIMySQL

README
actors and genres are in their own tables and need to be created before they can be referenced when adding movies.
e.g.
node src/app.js "add actor" --actor "Sean Connery" //creates actor record
node src/app.js "add genre" --genre "action" //creates genre record
node src/app.js "add movie" --title "Dr. No" --actor "Sean Connery" --genre "action" //creates movie record using title as title and actor and genre primary keys (id) as foreign keys in the movies table (actor_id and genre_id respectively)

other commands
node src/app.js "list" //will list movies (title, actor_id, genre_id)
node src/app.js "update" --title "<currentTitle>" --newTitle "<newTitle>" //update a movie title.
node src/app.js "delete" --title "<title>" //delete a movie by title.

node src/app.js "update variable" --change "movie_title" --currentValue "Casino Royale" --newValue "Royale With Cheese"

default "incorrect command"

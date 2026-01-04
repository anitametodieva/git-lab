function manageMovies(arr){
    let movies = [];

    for(let command of arr){
        if(command.includes('addMovie')){
            let tokens = command.split('addMovie ');
            let movieName = tokens[1];
            let movieObj = { name: movieName };

            movies.push(movieObj);

        } else if(command.includes('directedBy')){
            let [movieName, directorName] = command.split(' directedBy ');

            let movie = movies.find(movieObj => movieObj.name === movieName);

            if(movie){
                movie.director = directorName;
            }

        } else if(command.includes('onDate')){
            let [movieName, date] = command.split(' onDate ');

            let movie = movies.find(movieObj => movieObj.name === movieName);

            if(movie){
                movie.date = date;
            }

        }
    }

    for(let movieObj of movies){
        if(movieObj.name && movieObj.director && movieObj.date){
            console.log(JSON.stringify(movieObj));
        }
    }
}

manageMovies([

'addMovie Fast and Furious',

'addMovie Godfather',

'Inception directedBy Christopher Nolan',

'Godfather directedBy Francis Ford Coppola',

'Godfather onDate 29.07.2018',

'Fast and Furious onDate 30.07.2018',

'Batman onDate 01.08.2018',

'Fast and Furious directedBy Rob Cohen'

])


// function moviesInfo(arr){
//    let movies = [];
//
//    for(let line of arr){
//        if(line.startsWith('addMovie ')){
//            let name = line.replace('addMovie ', '');
//            movies.push({ name });
//        } else if(line.includes(' directedBy ')){
//            let [name, director] = line.split(' directedBy ');
//            let movie = movies.find(m => m.name === name);
//            if(movie){
//                movie.director = director;
//            }
//        } else if(line.includes(' onDate ')){
//            let [name, date] = line.split(' onDate ');
//            let movie = movies.find(m => m.name === name);
//            if(movie){
//                movie.date = date;
//            }
//        }
//    }
//
//    for(let movie of movies){
//        if(movie.name && movie.director && movie.date){
//            console.log(JSON.stringify(movie));
//            
//        }
//    }
// }
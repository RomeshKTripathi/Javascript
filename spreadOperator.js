// in javascript if we want to concatinate to arrays then we have two ways.
const bollywood = ['zero', 'dunki', '3 idiots']
const hollywood = ['inception', 'tenet', 'source code']
const tollywood = ['bahubali', 'vikram', 'rrr']
const allMovies = bollywood.concat(hollywood).concat(tollywood)
console.log(allMovies)

// Another and More handy way is 

const allMovies1 = [...bollywood, ...hollywood, ...tollywood]
console.log(allMovies1)
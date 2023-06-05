
// Dato un array di oggetti rappresentanti degli sviluppatori:
// - crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa


//     let list = [
//       { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//       { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//       { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//       { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//     ];

// EXTRA

// - Generalizza la funzione e fai scegliere all’utente il Continente e il Linguaggio di programmazione


// creati i prompt per inserire i dati da cercare
// let continent = prompt('Inserisci il continente')
// let language = prompt('Inserisci il linguaggio')

//     let list = [
//       { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//       { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//       { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//       { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
//     ];


// creare funzione che filtra la lista degli sviluppatori e restituisce la lunghezza dell'array filtrato che coincide con il numero di sviluppatori che soddisfano la condizione richiesta
//     function findDev(continent, language) {
//         let filtered = list.filter((developer) => developer.continent.toLowerCase() == continent && developer.language.toLowerCase() == language)
//         return filtered.length   
      
//     }

//    console.log(findDev(continent , language))

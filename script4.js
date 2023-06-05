// Es - 4 

// Dato un Array di oggetti:

// - crea una funzione che ritorni la seguente stringa:
//     - `< firstName >, < country >` del primo sviluppatore Python che trova
//     - `Non ci sono sviluppatori Python` nel caso in cui non ci siano.


//     let list = [
//       { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//       { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//       { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
//     ];

// Risultato:  `Victoria, Puerto Rico`.

// EXTRA

// - Generalizza la funzione e fai scegliere all’utente il Linguaggio di programmazione.


    // let list = [
    //   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    //   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    //   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
    // ];



    // function findPython() {
    //     let found = list.find((element) => element.language == 'Python')
    //     if (found) {
    //         return `${found.firstName} , ${found.country}`
    //     } else {
    //         return `Non ci sono sviluppatori Python`
    //     }
       
         
        
    // }

    // console.log(findPython());
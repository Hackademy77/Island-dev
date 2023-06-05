
// Es - 2

// Dato un array di oggetti:
// crea una funzione che ritorni un array
// e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:

//     “”

// ES.

//     let list = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//     ];

// Risultato :

//     [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
//        greeting: 'Hi Sofia, what do you like the most about Java?'
//       },
//       { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
//         greeting: 'Hi Lukas, what do you like the most about Python?'
//       },
//       { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
//         greeting: 'Hi Madison, what do you like the most about Ruby?'
//       } 
//     ];




//     let list = [
//     { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
//     ];



// creare funzione che crea tramite la map un nuovo array e con la string interpolation si aggiungono i valori
//     function greeting() {

//         let newArray = list.map((developer) => developer.greeting = `Hi ${developer.firstName} , what do you like the most about ${developer.language} ?`)
//         return newArray
        
//     }


//    console.log(greeting());
//    console.log(list);
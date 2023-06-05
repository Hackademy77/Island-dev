
// Es - 9

// Creare delle card contenenti:

// - una sezione che comprenda firstname e age della persona
// - la skill corrispondente a language
// - e la bandiera (flag) di appartenenza
// - per le bandiere utilizzare questa libreria CDN: https://cdnjs.com/libraries/flag-icon-css


//     let list = [
//         { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
//         { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
//         { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
//         { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
//         { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
//         { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
//         { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
//         { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
//         { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
//         { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
//     ];

// Suggerimento:

// - Inserire il link della CDN delle bandiere nel file html
// - per visualizzare le bandiere bisogna inserire due classi come nell’esempio:
//     - flag-icon: per dare la dimensione della bandiera
//     - flag-icon-siglabandiera: per mostrare la bandiera del paese
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
        
//         <!-- CDN icone bandiere -->
//         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/4.1.5/css/flag-icons.min.css" integrity="sha512-UwbBNAFoECXUPeDhlKR3zzWU3j8ddKIQQsDOsKhXQGdiB5i3IHEXr9kXx82+gaHigbNKbTDp3VY/G6gZqva6ZQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
//     </head>
//     <body>
//         <i class="flag-icon flag-icon-us"></i>
//         <i class="flag-icon flag-icon-fr"></i>
//         <i class="flag-icon flag-icon-es"></i>
//         <i class="flag-icon flag-icon-gb"></i>
//         <i class="flag-icon flag-icon-de"></i>
//         <i class="flag-icon flag-icon-co"></i>
//         <i class="flag-icon flag-icon-jp"></i>
//         <i class="flag-icon flag-icon-ch"></i>
//         <i class="flag-icon flag-icon-ar"></i>
//         <i class="flag-icon flag-icon-it"></i>
        
//         <script src="./es7.js"></script>
//     </body>
//     </html>


// - Siete liberi di creare il layout che piu’ vi piace.
let list = [
            { firstName: 'Harry', country: 'Stati Uniti d\'America', flag: 'us', age: 19, language: 'Python' },
            { firstName: 'Kseniya', country: 'Francia', flag: 'fr', age: 29, language: 'JavaScript' },
            { firstName: 'Jing', country: 'Spagna', flag: 'es', age: 39, language: 'Ruby' },
            { firstName: 'Noa', country: 'Inghilterra', flag: 'gb', age: 40, language: 'Ruby' },
            { firstName: 'Andrei', country: 'Germania', flag: 'de', age: 59, language: 'C' },
            { firstName: 'Maria', country: 'Colombia', flag: 'co', age: 60, language: 'C' },
            { firstName: 'Lukas', country: 'Giappone', flag: 'jp', age: 75, language: 'Python' },
            { firstName: 'Chloe', country: 'Svizzera', flag: 'ch', age: 88, language: 'Ruby' },
            { firstName: 'Viktoria', country: 'Argentina', flag: 'ar', age: 98, language: 'PHP' },
            { firstName: 'Piotr', country: 'Italia', flag: 'it', age: 48, language: 'JavaScript' }
        ];

let wrapper = document.querySelector('.wrapper')

list.forEach(person => {
    let div = document.createElement('div')
    div.classList.add('col-12' , 'col-md-5')
     div.innerHTML= `
               
                <div class="card my-3" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${person.firstName}, ${person.age} </h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${person.language}</h6>
                        <p class="card-text"><i class="flag-icon flag-icon-${person.flag}"></i></p>
                    </div>
                   </div>
                
          

  `

    wrapper.appendChild(div)
});


var n = 0


document.getElementById('gatito').addEventListener('click', function(){
    alert('gatito')
})

fetch('https://rickandmortyapi.com/api/character')
    .then(peticion =>{
        return peticion.json()
    })
    .then(respuesta =>{
        console.log('he recibido la respuesta')
        console.log(respuesta)

        var texto = ''

        var results = respuesta.results

        for(character of results){
            var charText = `<li>${character.name}</li>`

            texto += charText
            
        }

        // texto = respuesta.results[10].name

        document.getElementById('characters').innerHTML =texto
    })


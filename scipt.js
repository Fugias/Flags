//getting data from api
const url = 'https://restcountries.com/v2/all'

async function getFlags() {

    const response = await fetch(url)
    const data = await response.json()
    return data
}

//creating 
const flags = getFlags()

const createFlags = data => {
    const sectionFlag = document.createElement('div')
    sectionFlag.className = "flags width"     

    data.forEach(data => {
        const div = document.createElement('div')
        div.className = "flag"

        const img = document.createElement('img')
        img.src = data.flags.png

        const name = document.createElement('h2')
        name.innerText = data.name

        const popDiv = document.createElement('div')
        const populationT = document.createElement('h3')
        populationT.innerText = "Population"
        const population = document.createElement('p')
        population.innerText = data.population
        popDiv.className = "flex"
        popDiv.append(populationT, population)



        const regDiv = document.createElement('div')
        const regionT = document.createElement('h3')
        regionT.innerText = "Region"
        const region = document.createElement('p')
        region.innerText = data.region
        regDiv.className = "flex"
        regDiv.append(regionT, region)

        const capDiv = document.createElement('div')
        const capitalT = document.createElement('h3')
        capitalT.innerText = "Capital:"
        const capital = document.createElement('p')
        capital.innerText = data.capital;
        capDiv.className = "flex"
        capDiv.append(capitalT, capital)

        const sectionText = document.createElement('div')
        sectionText.className = "flag_wrap"
        sectionText.append(
            name,
            popDiv,
            regDiv,
            capDiv
            )


        div.append(
            img,
            sectionText
            )
       
            sectionFlag.append(div)

    })


    document.querySelector('body').append(sectionFlag)

}

flags.then(data => { createFlags(data)})





const filter = document.querySelector("#filter");

filter.addEventListener('change', filterRegion => {

    const test = document.querySelector(".flags")
    test.remove()

    flags.then( data => { 
        if(filterRegion.target.value == "") {
            createFlags(data)
        }
        let mesta = data.filter( data => {
            return data.region == filterRegion.target.value
        })


        createFlags(mesta)
        
    })

})



const search = document.querySelector('input')

search.addEventListener('input', search => {

    const test = document.querySelector(".flags")
    test.remove()


    flags.then( data => { 
        let mesta = data.filter( data => {
            return data.name.toLowerCase().includes(search.target.value.toLowerCase())
        })


        createFlags(mesta)
        
    })


    
})




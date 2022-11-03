const loadCountries =()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=>res.json())
    .then(data=>console.log(data))

}
loadCountries()

const displayCountries =country =>{
    // for(const countries of country){
    //     console.log(countries)
    // }
const countryDiv =
    country.forEach(countries=>{
       const h3 =document.createElement('h3')
       h3.innerText =countries.name

    })
}
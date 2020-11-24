import React, {useState, useEffect} from 'react'
import CountryList from './Components/CountryList'
import axios from 'axios'

const App = () => {
    
    const [country, setCountry] = useState([])

    const [chosenCountry, setChosenCountry] =useState("")

    useEffect(()=>{
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                setCountry(response.data)
            })
    },[])

    const showCountry = country.filter(count => count.name.toLowerCase().includes(chosenCountry.toLowerCase))

    const handleFilterChange=(event) => {
        
        setChosenCountry(event.target.value)
    }

    return(
        <div>
            find countries<input value={chosenCountry} onChange={handleFilterChange} />
            <CountryList countries={showCountry} setCountry={setChosenCountry} />
        </div>
    )
}


export default App
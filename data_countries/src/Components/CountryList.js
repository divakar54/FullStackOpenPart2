import React from 'react'
import Country from './Country'
import DetailedCountry from './DetailedCountry'

const CountryList = ({countries, setCountry, showCountries}) =>{
    if(countries.length>10){
        return(
            <div>
                Too many names, specify
            </div>
        )
    }
    else if(countries.length === 1){
        return(
            <DetailedCountry country={countries[0]}/>
        )
    }
    else if(countries.length > 1){
        return countries.map(country =>
            <Country
            key={country.name}
            country={country}
            setCountry={setCountry}
            showCountry={showCountries}
            />
        )
    }

}

export default CountryList
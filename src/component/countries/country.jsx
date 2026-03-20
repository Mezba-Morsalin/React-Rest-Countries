import React, { use, useState } from 'react';
import './country.css'
import AllCountries from '../allcountries/allcountries';
const Country = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleAllCountries = (country) => {
        const addCountries = [...visitedCountries, country];
        setVisitedCountries(addCountries)
    }
    const [countryCapital, setCountryCapital] = useState([])
    const handleCountryCapital = () => {
        const capital = [...countryCapital];
        setCountryCapital(capital)
    }
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h1 style={{
                marginBottom : "80px",
                textAlign : "center",
                textShadow :"0 0 5px white"
            }}>All Countries : {countries.length}</h1>
            <h2>Total Visited Countries : {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}><span style={{
                        fontWeight : "bolder"
                    }}>Country : {country.name.common}</span> Capital :{country.capital.capital}</li>)
                }
            </ol>
            <div className='country'>
                {
                countries.map(country => <AllCountries key={country.cca3.cca3} country = {country} handleAllCountries = {handleAllCountries} handleCountryCapital = {handleCountryCapital}></AllCountries>)
            }
            </div>
        </div>
    );
};

export default Country;
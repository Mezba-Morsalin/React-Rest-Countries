import React, { useState } from 'react';
import './allcountries.css'
const AllCountries = ({country, handleAllCountries, handleCountryCapital}) => {
    const [visited, setVisited] = useState(false)
    const Visit = () => {
        setVisited(!visited)
        handleAllCountries(country)
    }
    return (
        <div>
            <div className= {`allcountries ${visited && 'allcountries2'}`}>
                <img style={{
                    marginBottom : "12px"
                }} src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2 style={{
                    marginBottom : "10px"
                }}>Name : {country.name.common}</h2>
            <p style={{
                    marginBottom : "10px"
                }}>Capital : {country.capital.capital}</p>
            <p style={{
                    marginBottom : "10px"
                }}>Population : {country.population.population}</p>
            <p style={{
                    marginBottom : "10px"
                }}>Area : {country.area.area} Square Km</p>
             <p style={{ marginBottom: "10px" }}>
                Currency : {country.currency?.name}
            </p>
                <p style={{
                    marginBottom : "10px"
                }}>{country.area.area > 300000 ? "Big Country" :"Small Country"}</p>
                <button className='btn' onClick={Visit}>{visited ? "Visited" : "Not Visited"}</button>
            </div>
        </div>
    );
};

export default AllCountries;
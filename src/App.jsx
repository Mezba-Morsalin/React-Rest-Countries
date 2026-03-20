import { Suspense } from 'react'
import './App.css'
import Country from './component/countries/country'

const CountriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())


function App() {

  return (
    <>
      <section id="center">
        <div>
          <Suspense fallback= {<h3>Loading All Countries</h3>}>
            <Country countriesPromise = {CountriesPromise}></Country>
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default App

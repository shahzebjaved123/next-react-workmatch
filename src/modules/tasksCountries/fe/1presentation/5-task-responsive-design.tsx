/*
 We now want to display the countries as tiles in a grid.
 Each tile should show the country name in all caps letters and the code below.
 When clicking anywhere on the tile it should link to the country detail page (url: http://localhost:3000/countries/AL with AL being the respective code).
 Please also apply nice looking spacing and borders. Feel free to also add a hover effect.
 E.g.
 |---------------------|   |---------------------|
 | ANDORA              |   | ARMENIA             |
 | code: AN            |   | code: AM            |
 |---------------------|   |---------------------|

 Please show one tile per row on small screens and two tiles per row on large screens.

 Task:
 1. write the code required to display the tiles in a grid as described above.
    Please name it CountryList (pages/countries/index.tsx shows how it should be called)

  You can view your results on http://localhost:3000/countries
*/

// import { config } from "@config";
// import { A } from "@styleGuide";
// import { ICountry } from "./2-interface";
// // config.routes.country(code) will give the correct path


import { ICountryOverview } from '../../sharedInterfaces/1-taks-interface'
import { useFilterContext } from 'src/context/FilterContext'
import { CountryTile } from './CountryTile'
import { SearchInput } from './SearchInput'

interface ICountryList {
  countriesList: ICountryOverview[]
}

export const CountryList = ({countriesList}: ICountryList) => {

  const { filteredCountries } = useFilterContext()

  return <>
    <SearchInput />

    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
      { (filteredCountries.value || countriesList).map(country => <CountryTile key={country.code} country={country} />) } 
    </div>
  </>
}

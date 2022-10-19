/*
Bonus Task:
 1. Please explain the methods getStaticPaths() and getStaticProps() for next.js pages
 2. Please explain how to fetch the routes for dynamic paths
*/


// solution
import {getAllCountries} from '../../be/4dataAccess/getAllCountries'

export const getStaticPathsForCountries = async () => {
  // normally data fetching from api - we use sample data for simplicity
  return getAllCountries().map(c => {
    return {params: {code: c.code}}
  })
}
/*
Bonus Task:
 1. Please explain the methods getStaticPaths() and getStaticProps() for next.js pages

 getStaticPaths, needs to return all the path that need to be generated at build time, 
 This method will run once on server side, and generate all the paths. 

 getStaticsProps, need to return the props, needed to render a page. 
 The static pages will be pre-rendered, and this method can be used to provide props for that. 

 2. Please explain how to fetch the routes for dynamic paths

 The nextjs uses the folder structuring generate the dynamic routes. 
 the dynamic routes are generated using the params insde bracket i.e [code].tsx conventions. Like we use for country details page. 
*/


// solution
import {getAllCountries} from '../../be/4dataAccess/getAllCountries'

export const getStaticPathsForCountries = async () => {
  // normally data fetching from api - we use sample data for simplicity
  return getAllCountries().map(c => {
    return {params: {code: c.code}}
  })
}
import { ICountry } from '../../sharedInterfaces/1-taks-interface'
import {countryRecords} from '../5dataSources/sampleData'

export const getAllCountries = () => {
  // in real life this would be prisma (ORM) to access mongoDB.
  return countryRecords
}

export const getCountry = (code: string): ICountry | undefined => {
  return getAllCountries().find(country => country.code == code)
}
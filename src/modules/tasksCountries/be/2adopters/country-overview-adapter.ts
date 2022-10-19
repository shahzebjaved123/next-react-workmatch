import { ICountry, ICountryOverview } from "../../sharedInterfaces/1-taks-interface";

export const countryAdapter = (countryOverview: ICountry): ICountryOverview => (
    { name: countryOverview.name, code: countryOverview.code }
)
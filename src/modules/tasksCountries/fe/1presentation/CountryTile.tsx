import { useRouter } from "next/router"
import { ICountryOverview } from "../../sharedInterfaces/1-taks-interface"
import { config } from "@config";

interface ICountryTileProps {
    country: ICountryOverview
  }
  
export const CountryTile = ({country}: ICountryTileProps) => {
  
    const router = useRouter()
  
    const handleClick = () => {
        console.log(config.routes.country(country.code))
        router.push(location.origin + config.routes.country(country.code))
    }
  
    return (
        <div onClick={handleClick} className='country-tile p-10' key={country.code}>
            <h1>{country.name}</h1>
            <p>Code: {country.code}</p>
  
            <style jsx>{`
            .country-tile {
                background-color: rgb(229, 231, 235);
                height: 140px;
                border-radius: 8px;
            }
                
            h1 {
                font-size: 24px;
            }
    
            .country-tile:hover {
                background-color: rgb(156 163 175);
                cursor: pointer;
                color: white;
            }
            `}</style>
        </div>
    )
}
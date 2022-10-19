import { useFilterContext } from "src/context/FilterContext"

export const SearchInput = () => {

    let timeout: NodeJS.Timeout
    const { search, filteredCountries } = useFilterContext()

    const handleInputChange = (event) => {
        clearTimeout(timeout)
    
        timeout = setTimeout(() => {
          const currentValue = event.target.value
          search.set(currentValue)
          
          fetch(`/api/countries?q=${currentValue}`, { method: "POST" })
            .then(response => response.json())
            .then(countriesResponse => filteredCountries.set(countriesResponse.data))
    
        }, 200)
    }

    return <>
        <input placeholder='Filter Country' type="text" onChange={handleInputChange}/>

        <style jsx>
        {`
            input {
                border: 2px solid rgb(229, 231, 235);
                border-radius: 10px;
                width: 100%;
            }

            input:focus {
                border: 1px solid rgb(156 163 175);
            }
        `}
        </style> 
    </>
}
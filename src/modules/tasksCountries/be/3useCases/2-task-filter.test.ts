import {getAllCountries} from '../4dataAccess/getAllCountries'
import { filterCountries } from './2-task-filter'


describe('Test filterCountries', () => {
  
  it("filters out the coutries based on name", () => {
    const countries = getAllCountries()
    const filteredResults = filterCountries(countries, "AE")
    const expectedResult = [
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]

    expect(filteredResults).toEqual(expectedResult)
  })

  it("handles the case for undefined code", () => {
    const countries = [
      {
        "cod": "AD",
        "name": "Andorra",
      },
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AF",
        "name": "Afghanistan",
      },
      {
        "code": "AG",
        "name": "Antigua and Barbuda",
      },
      {
        "code": "AL",
        "name": "Albania",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]


    const filteredResults = filterCountries(countries as any, "AE")
    const expectedResult = [
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]

    expect(filteredResults).toEqual(expectedResult)

  })

  it("handles the case for undefined name", () => {
    const countries = [
      {
        "code": "AD",
        "nam": "Andorra",
      },
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AF",
        "name": "Afghanistan",
      },
      {
        "code": "AG",
        "name": "Antigua and Barbuda",
      },
      {
        "code": "AL",
        "name": "Albania",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]


    const filteredResults = filterCountries(countries as any, "AE")
    const expectedResult = [
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]

    expect(filteredResults).toEqual(expectedResult)
  })

  it("handles the case for missing name and code", () => {
    const countries = [
      {
        "foo": "AD",
        "bar": "Andorra",
      },
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AF",
        "name": "Afghanistan",
      },
      {
        "code": "AG",
        "name": "Antigua and Barbuda",
      },
      {
        "code": "AL",
        "name": "Albania",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]


    const filteredResults = filterCountries(countries as any, "AE")
    const expectedResult = [
      {
        "code": "AE",
        "name": "United Arab Emirates",
      },
      {
        "code": "AM",
        "name": "Armenia",
      }
    ]

    expect(filteredResults).toEqual(expectedResult)
  })
})

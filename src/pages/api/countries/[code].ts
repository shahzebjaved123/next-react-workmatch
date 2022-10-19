import { apiResponse, ApiResponseStatus, HttpMethods, IResult, methodsNotAllowedResponse } from "@utils";
import { NextApiRequest, NextApiResponse } from "next";
import { getAllCountries } from "src/modules/tasksCountries/be/4dataAccess/getAllCountries";
import { ICountry } from "src/modules/tasksCountries/sharedInterfaces/1-taks-interface";

const requestHandler = async (req: NextApiRequest, res: NextApiResponse<IResult<ICountry>>) => {

    const { code } = req.query
   

    switch (req.method) {
        case 'GET': {
            const country = getAllCountries().find(country => country.code === code) || null

            if (country == null)
                return apiResponse(res, ApiResponseStatus.NOT_FOUND, null, [])

            return apiResponse(res, ApiResponseStatus.OK, country, [])
        }
    
        default:
          return methodsNotAllowedResponse(res, [HttpMethods.POST], req.method)
      }
}

export default requestHandler
import axios from "axios"
import { City } from "../types/City";

export const SearchCity = (city: string): Promise<City[]> => {
    return axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`, {
        headers: {
            "X-Api-Key": process.env.REACT_APP_API_NINJAS_API_KEY,
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.data;
    }).catch(error => {
        throw new Error(error);
    })
}
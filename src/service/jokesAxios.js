
import { instanceAxios } from "../helper/instanceAxios";


export const getJokes = (params) => {
    
    return instanceAxios({ method: "GET", url: "/search?limit=10", params });
}
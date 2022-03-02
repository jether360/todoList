import axios from "axios";

const BASE_URL = "https://localhost:5001/api/";

export const createAPIEndpoint = (endpoint: string) => {
    
    let url = BASE_URL + endpoint + '/';

    return{
        getAll: () => axios.get(url),
        getById: (id: number) => axios.get(url + id),
        create: (newRecord: any) => axios.post(url, newRecord),
        update: (id: number, updatedRecord: any) => axios.put(url + id, updatedRecord),
        delete: (id: number) => axios.delete(url + id)
    }
}

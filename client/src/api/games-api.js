import * as request from './requester'
//todo Change data name
const BASE_URL = 'http://localhost:3030/data/games'

 const getAll = async () => {
    
    
    
    const result = await request.get(BASE_URL);
    const games = Object.values(result);
    return games;



}

const getOne = (gameId) => request.get(`${BASE_URL}/${gameId}`)

const create = (studentData) => request.post(`${BASE_URL}`, studentData)


const gameAPI = {
    getAll,
    getOne,
    create,
}

export default gameAPI;
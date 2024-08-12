import * as request from './requester'


const BASE_URL = 'http://localhost:3030/data/test'


const createTest = (test) => request.post(`${BASE_URL}`, test)

const getAll = async () => {
    
    
    
    const result = await request.get(BASE_URL);
    const tests = Object.values(result);
    return tests;



}

const getOne = (testId) => request.get(`${BASE_URL}/${testId}`)




const testAPI = {
    createTest,
    getAll,
    getOne
}

export default testAPI;
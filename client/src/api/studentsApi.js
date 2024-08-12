import * as request from './requester'
//todo Change data name
const BASE_URL = 'http://localhost:3030/data/students'

 const getAll = async () => {
    
    
    
    const result = await request.get(BASE_URL);
    const students = Object.values(result);
    return students;



}

const getOne = (studentId) => request.get(`${BASE_URL}/${studentId}`)

const create = (studentData) => request.post(`${BASE_URL}`, studentData)


const studentAPI = {
    getAll,
    getOne,
    create,
}

export default studentAPI;
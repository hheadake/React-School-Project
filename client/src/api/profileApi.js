const BASE_URL = 'http://localhost:3030/data/profile'
import * as request from './requester'

const createProfile = (profile) => request.post(`${BASE_URL}`, profile)

const getOne = () => request.get(`${BASE_URL}`)


const profileAPI = {
   createProfile,
    getOne,
}

export default profileAPI;
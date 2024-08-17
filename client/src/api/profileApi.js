const BASE_URL = 'http://localhost:3030/data/profile'
import * as request from './requester'

const createProfile = (profileData) => request.post(`${BASE_URL}`, profileData)

const getOne = (profileId) => request.get(`${BASE_URL}/${profileId}`)


const profileAPI = {
   createProfile,
    getOne,
}

export default profileAPI;
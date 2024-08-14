import profileAPI from "../api/profileApi";
import { useEffect, useState } from "react";

export function useGetOneProfile (ProfileId) {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        (async () => {
        const result = await profileAPI.getOne(ProfileId)
        setProfile(result)
        })();
    }, [ProfileId]);
    

    return [profile, setProfile]
}

export function useAddProfile() {

    const addProfileHandler = (profileData) => profileAPI.createProfile(profileData);
   
    return addProfileHandler;
    
}
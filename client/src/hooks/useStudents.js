import { useState, useEffect } from "react";
import gameAPI from '../api/games-api'



export function useGetAllGames() {

    const [games, setGame] = useState([]);

    useEffect(() => {
      (async () => {
        const result = await gameAPI.getAll();
        setGame(result);
      })();
    }, []);


return [games, setGame]



}

export function useGetOneGame (gameId) {
    const [game, setGame] = useState({});

    useEffect(() => {
        (async () => {
        const result = await gameAPI.getOne(gameId)
        setGame(result)
        })();
    }, [gameId]);
    

    return [game, setGame]
}


export function useAddStudent() {

 const addStudentHandler = (studentData) => gameAPI.create(studentData);

 return addStudentHandler;
 
}
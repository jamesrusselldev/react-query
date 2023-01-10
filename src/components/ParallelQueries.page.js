import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const ParallelQueriesPage = () => {
    const fetchSuperheroes = () => {
        return axios.get('http://localhost:4000/superheroes');
    }

    const fetchFriends = () => {
        return axios.get('http://localhost:4000/friends');
    }
  
    const { data: superHeroes  } = useQuery('super-heroes', fetchSuperheroes);
    const { data: friends} = useQuery('friends', fetchFriends);
    return (
    <>
        <h1>Superheroes</h1>
        {superHeroes?.data.map((hero) => {
            return (
                <li key={hero.id}>{hero.name}</li>
            )
        })}
        <h1>Friends</h1>
        {friends?.data.map(friend => {
            return (
                <li key={friend.id}>{friend.name}</li>
            )
        })}
    </>
  )
}

export default ParallelQueriesPage
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SuperheroesPage = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get("http://localhost:4000/superheroes/")
        .then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((error => {
            setError(error.message)
            setLoading(false)
        }))
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return <h2>{error}</h2>
    }

  return (
    <>
        <h2>Super Heroes Page</h2>
        {data && data.map((hero) => (
            <h4 key={hero.id}>{hero.name}</h4>
        ))}
    </>
  )
}

export default SuperheroesPage
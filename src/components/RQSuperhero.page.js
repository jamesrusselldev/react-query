import React from 'react'
import { useParams } from 'react-router-dom';
import { useSuperheroData } from '../hooks/useSuperHeroData';

export const RQSuperheroPage = () => {
  const { heroID } = useParams();
  const { data } = useSuperheroData(heroID);

  return (
    <div>
      <h1>RQ Super Hero Individual Data</h1>
      <h2>{data?.data.name}</h2>
      <h1>A.K.A</h1>
      <h2>{data?.data.alterego}</h2>
    </div>
  )
}
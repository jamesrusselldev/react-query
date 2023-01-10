import { useQuery } from "react-query";
import axios from "axios";

const fetchData = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperheroesData = (onSuccess, onError) => {
  return useQuery("rq-super-heroes", fetchData, {
    enabled: false,
    onSuccess,
    onError,
    cacheTime: 50000,
    refetchInterval: 1000
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

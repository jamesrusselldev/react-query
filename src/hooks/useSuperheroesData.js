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
    select: (data) => {
      const superHeroNames = data.data.map((hero) => hero.name);
      return superHeroNames;
    },
  });
};

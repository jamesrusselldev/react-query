import { useQuery } from "react-query";
import axios from "axios";

const fetchHeroByID = ({ queryKey }) => {
  const heroID = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroID}`);
};

// Configuring data export by ID
export const useSuperheroData = (heroID) => {
  return useQuery(['super-hero', heroID], fetchHeroByID);
}

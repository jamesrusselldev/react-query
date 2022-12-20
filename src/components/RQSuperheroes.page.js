import React from "react";
import { useSuperheroesData } from "./../hooks/useSuperheroesData";

const RQSuperheroesPage = () => {
  const onSuccess = (data) => {
    console.log("Side effect after data fetching", data);
  };

  const onError = (data) => {
    console.log("Side effect after error", data);
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperheroesData(onSuccess, onError);

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h1>RQ Superheroes</h1>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data?.data.map((hero) => {
          return <p key={hero.id}>{hero.name}</p>;
        })} */}

      {data?.map((heroName) => {
        return <p key={heroName}> {heroName}</p>;
      })}
    </div>
  );
};

export default RQSuperheroesPage;

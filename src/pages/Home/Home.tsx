import React from "react";
import { useGetHouses } from "../../hooks";
import { HouseBadge } from "../../components/HouseBadge/HouseBadge";
import "./Home.css";

export const Home = () => {
  const { data, isLoading } = useGetHouses();

  if (isLoading) {
    return (
      <div className="h-100 flex-column justify-center align-center">
        <span className="loader"></span>{" "}
      </div>
    );
  }

  return (
    <div className="flex-column align-center mt-3">
      {data ? (
        data.map((house) => (
          <HouseBadge key={house.id} className="mb-3" {...house} />
        ))
      ) : (
        <div>No houses found</div>
      )}
    </div>
  );
};

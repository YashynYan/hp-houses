import { useEffect, useState } from "react";
import { House } from "../models";

const HOUSES_SERVICE = "/houses";

export const useGetHouses = () => {
  const [response, setResponse] = useState<{
    isLoading: boolean;
    error: null | string;
    data: null | Array<House>;
  }>({
    isLoading: true,
    error: null,
    data: null,
  });

  const API_ENDPOINT = `${process.env.REACT_APP_API_DOMAIN}${HOUSES_SERVICE}`;

  useEffect(() => {
    if (response.isLoading) {
      fetch(API_ENDPOINT)
        .then((response) => response.json())
        .then((data) => {
          const cards = data;
          setResponse({ isLoading: false, error: null, data: cards });
        })
        .catch((error) => {
          setResponse({ isLoading: false, error: error, data: null });
        });
    }
  }, [API_ENDPOINT, response.isLoading]);

  return { ...response };
};

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useCallback } from "react";

export const useFetchData = (url: string, key: string) => {
  const queryFn = useCallback(() => axios
    .get(url)
    .then((res) => res.data), 
    [ url ]);
    
  const { isLoading, error, data} = useQuery({
    queryKey: [ key ],
    queryFn
  });

  return {
        data,
        isLoading,
        error,
    };
};

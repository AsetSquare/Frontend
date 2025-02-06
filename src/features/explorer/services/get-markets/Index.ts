import useSearchQueries from "@/hooks/useSearchQueries/Index";
import { axiosApi } from "@/services/axios/Index";
import { useQuery } from "@tanstack/react-query";

export const useMarkets = () => {
  const { page, pageLimit, search, marketId } = useSearchQueries(["marketId"]);

  return useQuery({
    queryKey: ["markets", page, pageLimit, search, marketId],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/market/explorer`, {
        params: {
          page,
          limit: pageLimit,
          name: search,
          marketId,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetMarkets = () => {
  return useQuery({
    queryKey: ["getMarkets"],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/market/explorer`);
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

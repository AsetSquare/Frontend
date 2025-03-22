import useSearchQueries from "@/hooks/useSearchQueries/Index";
import { axiosApi } from "@/services/axios/Index";
import { useQuery } from "@tanstack/react-query";

export const useGetAssetsByMarket = () => {
  const { page, pageLimit, search, marketId } = useSearchQueries(["marketId"]);

  return useQuery({
    queryKey: ["markets", page, pageLimit, search, marketId],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/market/explorer/asset`, {
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

export const useGetMarketDetailOnchain = (marketId: string) => {
  return useQuery({
    queryKey: ["marketsid"],
    queryFn: async () => {
      const { data } = await axiosApi.post(
        `/market/onchain`,
        { collectionId: marketId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

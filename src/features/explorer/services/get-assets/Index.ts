import useSearchQueries from "@/hooks/useSearchQueries/Index";
import { axiosApi } from "@/services/axios/Index";
import { useQuery } from "@tanstack/react-query";

export const useSearchAssets = () => {
  const { page, pageLimit, search, assetId } = useSearchQueries(["assetId"]);

  return useQuery({
    queryKey: ["searchAssets", page, pageLimit, search, assetId],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/asset/explorer`, {
        params: {
          page,
          limit: pageLimit,
          name: search,
          assetId,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetAllAssets = () => {
  const { page, pageLimit } = useSearchQueries();

  return useQuery({
    queryKey: ["assets", page, pageLimit],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/asset/explorer`, {
        params: {
          page,
          limit: pageLimit,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useSearchMarketsAssets = () => {
  const { page, pageLimit, search } = useSearchQueries();

  return useQuery({
    queryKey: ["searchAssets", page, pageLimit, search],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/market/explorer/search`, {
        params: {
          page,
          limit: pageLimit,
          q: search,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

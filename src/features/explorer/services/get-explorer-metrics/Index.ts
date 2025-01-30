import { axiosApi } from "@/services/axios/Index";
import { useQuery } from "@tanstack/react-query";

export const useMetrics = () => {
  return useQuery({
    queryKey: ["metrics"],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/explorer/metrics`, {});
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

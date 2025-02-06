import { axiosApi } from "@/services/axios/Index";
import { useQuery } from "@tanstack/react-query";
import useAuthWallet from "@/hooks/useAuth/Index";

export const useGetProfile = () => {
  const auth = useAuthWallet();
  return useQuery({
    queryKey: ["getProfile"],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/auth/profile`, {
        headers: {
          Authorization: `Bearer ${auth.auth.token}`,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useGetApiKey = () => {
  const auth = useAuthWallet();
  return useQuery({
    queryKey: ["getApi"],
    queryFn: async () => {
      const { data } = await axiosApi.get(`/auth/api-key`, {
        headers: {
          Authorization: `Bearer ${auth.auth.token}`,
        },
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
};

import { getUser } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useUser = () => {
  const { data } = useQuery({
    queryKey: ["readUser"],
    queryFn: getUser,
  });
  return data;
};

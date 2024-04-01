import { getFolderList } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useUserFolderList = () => {
  const { data } = useQuery({
    queryKey: ["readFolderList"],
    queryFn: () => getFolderList(),
  });

  return data;
};

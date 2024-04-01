import { getUserFolder } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useUserFolder = (folderId: number) => {
  const { data } = useQuery({
    queryKey: ["readFolder"],
    queryFn: () => getUserFolder(folderId),
  });
  return data;
};

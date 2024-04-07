import { UserFolderLinkData, getUserFolderLinkList } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useUserFolderLinkList = (folderId: number) => {
  const { data: userFolderLinkList } = useQuery<UserFolderLinkData[]>({
    queryKey: ["readFolderLinkList", folderId],
    queryFn: () => getUserFolderLinkList(folderId),
  });
  return userFolderLinkList;
};

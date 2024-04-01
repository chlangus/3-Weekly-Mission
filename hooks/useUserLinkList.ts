import { UserLinkData, getLinkList } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useLinkList = () => {
  const { data } = useQuery<UserLinkData[]>({
    queryKey: ["readLinkList"],
    queryFn: () => getLinkList(),
  });

  return data;
};

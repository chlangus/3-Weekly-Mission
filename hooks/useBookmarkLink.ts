import { bookmarkLink } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useBookmarkLink = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    void,
    Error,
    { linkId: number; favorite: boolean }
  >({
    mutationFn: ({ linkId, favorite }) => bookmarkLink(linkId, favorite),
    onSuccess: () => queryClient.refetchQueries(),
  });
  return mutate;
};

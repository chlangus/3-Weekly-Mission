import { createLink } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddLink = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    void,
    Error,
    { link: string; folderId: number }
  >({
    mutationFn: ({ link, folderId }) => createLink(link, folderId),
    onSuccess: () => queryClient.refetchQueries(),
  });
  return mutate;
};

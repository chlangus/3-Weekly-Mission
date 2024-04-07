import { deleteLink } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteLink = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<void, Error, number>({
    mutationFn: (linkId) => deleteLink(linkId),
    onSuccess: () => queryClient.refetchQueries(),
  });
  return mutateAsync;
};

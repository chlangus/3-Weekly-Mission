import { deleteFolder } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteFolder = () => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation<void, Error, number>({
    mutationFn: (folderId) => deleteFolder(folderId),
    onSuccess: () => queryClient.refetchQueries(),
  });
  return mutateAsync;
};

import { updateFolder } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useChangeFolderName = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<
    void,
    Error,
    { folderId?: number; name?: string }
  >({
    mutationFn: ({ folderId, name }) => updateFolder(folderId, name),
    onSuccess: () => queryClient.refetchQueries(),
  });
  return mutate;
};

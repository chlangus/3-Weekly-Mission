import { createFolder } from "@/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useCreateFolder = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation<void, Error, string>({
    mutationFn: (name) => createFolder(name),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["readFolderList"] }),
  });
  return mutate;
};

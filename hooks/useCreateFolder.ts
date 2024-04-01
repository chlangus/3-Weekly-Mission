import { createFolder } from "@/api/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

const queryClient = new QueryClient();
export const useCreateFolder = () => {
  const { mutate } = useMutation<void, Error, string>({
    mutationFn: (name) => createFolder(name),
    onSuccess: () =>
      queryClient.invalidateQueries(
        { queryKey: ["readFolderList"] },
      ),
  });
  return mutate;
};

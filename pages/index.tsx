import { getFolderList } from "@/api/api";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from "react";

interface Props {
  id: number;
  created_at: string;
  favorite: boolean;
  name: string;
  link_count: number;
}

export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: result } = useQuery({
    queryKey: ["readFolderList"],
    queryFn: () => getFolderList(),
  });
  return (
    <>
      <h1>Shared Folders</h1>
      {result?.map(
        (item: {
          id: Key | null | undefined;
          name:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | PromiseLikeOfReactNode
            | null
            | undefined;
        }) => (
          <Link key={item.id} href={`/shared/${item.id}`}>
            <h2>{item.name} Page</h2>
          </Link>
        )
      )}
      <br />
      <Link href="/folder">
        <h1>folder Page</h1>
      </Link>
    </>
  );
}

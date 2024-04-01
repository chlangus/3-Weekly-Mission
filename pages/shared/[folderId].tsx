import { useMemo, useState } from "react";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Banner from "@/components/shared/Banner";
import SearchBar from "@/components/common/SearchBar";
import Cards from "@/components/common/Cards";
import { useUserFolderLinkList } from "@/hooks/useUserFolderLinkList";
import { useRouter } from "next/router";
import { useUser } from "@/hooks/useUser";
import { useUserFolder } from "@/hooks/useUserFolder";

export const USER_ID = 1;

export default function Shared() {
  const {
    query: { folderId },
  } = useRouter();
  const [searchValue, setsearchValue] = useState("");
  const handleInputChange = (value: string) => {
    setsearchValue(value);
  };

  const folderLinkList = useUserFolderLinkList(Number(folderId));
  const user = useUser();
  const folderData = useUserFolder(Number(folderId));

  const searchedData = useMemo(() => {
    return folderLinkList?.filter((item) => {
      if (
        item.description?.includes(searchValue) ||
        item.url?.includes(searchValue) ||
        item.title?.includes(searchValue)
      ) {
        return item;
      }
    });
  }, [folderLinkList, searchValue]);

  return (
    <>
      <Header profileImageSource={user?.image_source} email={user?.email} />
      <Banner folder={folderData} user={user} />
      <SearchBar handleInputChange={handleInputChange} />
      <Cards data={searchedData} isFolder={false} />
      <Footer />
    </>
  );
}

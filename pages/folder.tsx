import AddLinkBar from "@/components/folder/AddLinkBar";
import Content from "@/components/folder/Content";
import SearchBar from "@/components/common/SearchBar";
import Header from "@/components/common/Header";
import { useMemo, useState } from "react";
import Footer from "@/components/common/Footer";
import { useUserFolderLinkList } from "@/hooks/useUserFolderLinkList";
import { useLinkList } from "@/hooks/useUserLinkList";
import { useUser } from "@/hooks/useUser";
import { useUserFolderList } from "@/hooks/useUserFolderList";

export default function Folder() {
  const [targetFolder, setTargetFolder] = useState({
    title: "전체",
    id: 0,
  });
  const userFolderLinkList = useUserFolderLinkList(targetFolder.id);
  const userLinkList = useLinkList();
  const user = useUser();
  const folderList = useUserFolderList();
  const [searchValue, setsearchValue] = useState("");

  const handleInputChange = (value: string) => {
    setsearchValue(value);
  };
  const searchedData = useMemo(() => {
    if (targetFolder.id === 0) {
      return userLinkList?.filter((item) => {
        if (
          item.description?.includes(searchValue) ||
          item.url?.includes(searchValue) ||
          item.title?.includes(searchValue)
        ) {
          return item;
        }
      });
    } else {
      return userFolderLinkList?.filter((item) => {
        if (
          item.description?.includes(searchValue) ||
          item.url?.includes(searchValue) ||
          item.title?.includes(searchValue)
        ) {
          return item;
        }
      });
    }
  }, [searchValue, targetFolder.id, userFolderLinkList, userLinkList]);
  return (
    <>
      <Header
        isSticky
        profileImageSource={user?.image_source}
        email={user?.email}
      />
      <AddLinkBar folderList={folderList} />
      <SearchBar handleInputChange={handleInputChange} />
      <Content
        targetFolder={targetFolder}
        setTargetFolder={setTargetFolder}
        searchedLinkList={searchedData}
        folderList={folderList}
      />
      <Footer />
    </>
  );
}

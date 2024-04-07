import Card from "../common/Card";
import { useState } from "react";
import styles from "./Content.module.css";
import Modal from "../modals/Modal";
import useModal from "../../hooks/useModal";
import classNames from "classnames/bind";
import { type UserFolder, type UserFolderLinkData } from "@/api/api";
import { useRouter } from "next/router";
import TitleBar from "./TitleBar";
import Category from "./Category";
import Cards from "../common/Cards";
import { useQueryClient } from "@tanstack/react-query";

const cx = classNames.bind(styles);

interface Props {
  searchedLinkList?: UserFolderLinkData[];
  folderList: UserFolder[];
  targetFolder: any;
  setTargetFolder: any;
}

export default function Content({
  searchedLinkList,
  folderList,
  targetFolder,
  setTargetFolder,
}: Props) {
  const queryClient = useQueryClient();
  const { modalState, setModalState, handleModalCancel } = useModal();

  const handleClick = (title: string, id: number) => {
    setTargetFolder({ title, id });
    queryClient.invalidateQueries({ queryKey: ["readFolderLinkList", id] });
    queryClient.invalidateQueries({ queryKey: ["readLinkList"] });
  };

  return (
    <section className={cx("content")}>
      <Modal
        state={modalState}
        setModalState={setModalState}
        onClick={handleModalCancel}
        folderList={[]}
        link=""
      />
      <Category
        handleClick={handleClick}
        folderList={folderList}
        setModalState={setModalState}
        targetFolder={targetFolder}
      />
      <TitleBar setModalState={setModalState} targetFolder={targetFolder} />
      <Cards data={searchedLinkList} isFolder={true} />
    </section>
  );
}

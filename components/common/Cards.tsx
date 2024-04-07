import styles from "./Cards.module.css";
import Card from "./Card";
import type { UserFolder, UserFolderLinkData } from "@/api/api";
import { Dispatch, SetStateAction } from "react";
import { ModalData } from "@/hooks/useModal";

interface Props {
  isFolder: boolean;
  data?: UserFolderLinkData[];
  setModalState: Dispatch<SetStateAction<ModalData>>;
}

export default function Cards({ isFolder, data: folderLinkList, setModalState }: Props) {
  return (
    <div className={styles["card-container"]}>
      {folderLinkList?.length ? (
        folderLinkList.map((link) => (
          <Card
            key={link.id}
            data={link}
            isFolder={isFolder}
            setModalState={setModalState}
          />
        ))
      ) : (
        <div className={styles["no-link"]}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

import styles from "./Cards.module.css";
import Card from "./Card";
import type { UserFolder, UserFolderLinkData } from "@/api/api";

interface Props {
  isFolder: boolean;
  data?: UserFolderLinkData[];
  setModalState: any;
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

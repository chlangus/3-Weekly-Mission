import styles from "./Cards.module.css";
import Card from "./Card";
import type { UserFolderLinkData } from "@/api/api";

interface Props {
  isFolder: boolean;
  data?: UserFolderLinkData[];
}

export default function Cards({ isFolder, data: folderLinkList }: Props) {
  return (
    <div className={styles["card-container"]}>
      {folderLinkList?.length ? (
        folderLinkList.map((link) => (
          <Card key={link.id} data={link} folderList={[]} isFolder={isFolder} />
        ))
      ) : (
        <div className={styles["no-link"]}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

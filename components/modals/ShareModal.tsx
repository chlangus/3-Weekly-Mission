import Image from "next/image";
import styles from "./Modal.module.css";
import kakao from "@/public/kakao_share.svg";
import facebook from "@/public/facebook_share.svg";
import linkIcon from "@/public/link.svg";
import classNames from "classnames/bind";
import { ModalData } from "@/hooks/useModal";

const cx = classNames.bind(styles);

interface Props {
  state: ModalData;
}
export default function ShareModal({ state }: Props) {
  // 호스트주소/shared?user={현재 로그인 중인 유저ID}&folder={현재 열려있는 폴더ID}
  return (
    <>
      <h2 className={cx("modal-title", "having-folder-and-link")}>폴더 공유</h2>
      <h3 className={cx("link-and-folder-name")}>{state["folderName"]}</h3>
      <div className={cx("share-icon-wrapper")}>
        <button className={cx("share-icon-btn")}>
          <div className={cx("img-container", "kakao")}>
            <Image className={cx("share-icon")} src={kakao} alt="kakao-icon" />
          </div>
          <span className={cx("share-icon-name")}>카카오톡</span>
        </button>
        <button className={cx("share-icon-btn")}>
          <div className={cx("img-container", "facebook")}>
            <Image
              className={cx("share-icon")}
              src={facebook}
              alt="facebook-icon"
            />
          </div>
          <span className={cx("share-icon-name")}>페이스북</span>
        </button>
        <button className={cx("share-icon-btn")}>
          <div className={cx("img-container", "link-icon")}>
            <Image
              className={cx("share-icon")}
              src={linkIcon}
              alt="link-icon"
            />
          </div>
          <span className={cx("share-icon-name")}>링크 복사</span>
        </button>
      </div>
    </>
  );
}

import useModal from "../../hooks/useModal";
import calculateElapsedTimeSinceCreation from "../../utils/calculateElapsedTimeSinceCreation";
import formatDate from "../../utils/formatDate";
import styles from "./Card.module.css";
import { useState } from "react";
import Modal from "../modals/Modal";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import type { UserFolder, UserLinkData } from "@/api/api";

const cx = classNames.bind(styles);

interface Props {
  data: UserLinkData;
  folderList: UserFolder[];
  isFolder: boolean;
}

export default function Card({
  data: folderLink,
  folderList,
  isFolder,
}: Props) {
  const { created_at, url, description, image_source, title } = folderLink;
  const formattedDate = formatDate(created_at);
  const timeAgo = calculateElapsedTimeSinceCreation(created_at);
  const imageUrl = image_source || null;
  const [popoverState, setPopoverState] = useState(false);
  const {modalState, setModalState, handleModalCancel} = useModal();
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <Link
        className={cx("card", { "card-hover": isHover })}
        href={url}
        target="_blank"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <>
          <Modal
            link=""
            state={modalState}
            onClick={handleModalCancel}
            folderList={folderList}
          />
          <div className={cx("card-img-container")}>
            <div className={cx("card-img", { "no-img": !imageUrl })}>
              <Image
                fill
                src={image_source || "/no-img-logo.svg"}
                alt={title}
              />
            </div>
          </div>
          <div className={cx("mention-wrapper")}>
            <p className={cx("time-and-kebob-wrapper")}>
              <span className={cx("upload-time-ago")}>{timeAgo}</span>
              {isFolder && (
                <button
                  className={cx("kebab-btn")}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPopoverState(!popoverState);
                  }}
                />
              )}
            </p>
            {popoverState ? (
              <div
                className={cx("popover")}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setIsHover(false);
                }}
              >
                <button
                  className={cx("popover-btn")}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalState({ state: true, target: "삭제하기", url });
                  }}
                >
                  삭제하기
                </button>
                <button
                  className={cx("popover-btn")}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setModalState({ state: true, target: "폴더에 추가", url });
                  }}
                >
                  폴더에 추가
                </button>
              </div>
            ) : (
              ""
            )}
            <p className={cx("description")}>{description}</p>
            <p className={cx("upload-date")}>{formattedDate}</p>
          </div>
        </>
      </Link>
    </>
  );
}

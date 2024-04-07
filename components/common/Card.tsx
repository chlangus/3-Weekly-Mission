import calculateElapsedTimeSinceCreation from "../../utils/calculateElapsedTimeSinceCreation";
import formatDate from "../../utils/formatDate";
import styles from "./Card.module.css";
import { Dispatch, SetStateAction, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames/bind";
import type { UserFolderLinkData } from "@/api/api";
import type { ModalData } from "@/hooks/useModal";
import star from "@/public/star.svg";
import favoriteStar from "@/public/favorite-star.svg";
import { useBookmarkLink } from "@/hooks/useBookmarkLink";

const cx = classNames.bind(styles);

interface Props {
  data: UserFolderLinkData;
  isFolder: boolean;
  setModalState: Dispatch<SetStateAction<ModalData>>;
}

export default function Card({
  data: folderLink,
  isFolder,
  setModalState,
}: Props) {
  const {
    created_at,
    url,
    description,
    image_source,
    title,
    id: cardId,
    favorite,
  } = folderLink;
  const [isFavorite, setIsFavorite] = useState(favorite);
  const formattedDate = formatDate(created_at);
  const timeAgo = calculateElapsedTimeSinceCreation(created_at);
  const imageUrl = image_source || null;
  const [popoverState, setPopoverState] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const bookmarkMutate = useBookmarkLink();

  const handleClick = (e: any) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
    bookmarkMutate({ linkId: cardId, favorite: !isFavorite });
  };
  return (
    <>
      <Link
        className={cx("card", { "card-hover": isHover })}
        href={`https:${url}`}
        target="_blank"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <>
          <div className={cx("card-img-container")}>
            <div className={cx("card-img", { "no-img": !imageUrl })}>
              <Image
                fill
                src={image_source || "/no-img-logo.svg"}
                alt={title}
              />
            </div>
            <button
              type="button"
              className={cx("star")}
              onMouseEnter={() => {
                setIsHover(false);
              }}
              onMouseLeave={() => {
                setIsHover(true);
              }}
              onClick={handleClick}
            >
              <Image fill src={isFavorite ? favoriteStar : star} alt="별모양" />
            </button>
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
                    setPopoverState(false);
                    setModalState({
                      state: true,
                      target: "삭제하기",
                      url,
                      cardId,
                    });
                  }}
                >
                  삭제하기
                </button>
                <button
                  className={cx("popover-btn")}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setPopoverState(false);
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

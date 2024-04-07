import Link from "next/link";
import styles from "./index.module.css";
import classNames from "classnames/bind";
import Image from "next/image";
import logo from "../public/main-logo.svg";
import heroImage from "../public/hero-image.svg";
import facebookIcon from "../public/facebook_icon.svg";
import twitterIcon from "../public/twitter_icon.svg";
import youtubeIcon from "../public/youtube_icon.svg";
import instagramIcon from "../public/instagram_icon.svg";
import dogLookingBack from "../public/dog-lookingback.svg";
import folderNameChangeIcon from "../public/folderNameChangeIcon.svg";
import searchResultIcon from "../public/searchResultIcon.svg";
import shareFolderIcon from "../public/shareFolderIcon.svg";

const cx = classNames.bind(styles);

export default function index() {
  return (
    <div className={cx("wrap")}>
      <div className={cx("nav-bg")} />
      <header className={cx("nav")}>
        <Link href="/">
          <Image src={logo} alt="logo.svg" />
        </Link>
        <Link href="signin" className={cx("login")}>
          로그인
        </Link>
      </header>

      <main>
        <section className={cx("store-and-manage-section")}>
          <h1 className={cx("main-mention")}>
            <span className={cx("highlight")}>세상의 모든 정보</span>를<br />
            쉽게 저장하고 관리해 보세요
          </h1>
          <Link href="folder" className={cx("add-link")}>
            링크 추가하기
          </Link>
          <div className={cx("container")}>
            <Image
              src={heroImage}
              alt="example-image"
              className={cx("example-image")}
            />
          </div>
        </section>

        <section className={cx("section", "sections", "store-link-section")}>
          <div className={cx("sub-wrapper")}>
            <h2 className={cx("sub-mention")}>
              <span className={cx("highlight")}>원하는 링크</span>를 저장하세요
            </h2>
            <p className={cx("description")}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </div>
          <div className={cx("mobile-content-wrapper")}>
            <div className={cx("image-container")}>
              <Image
                className={cx("border-image")}
                src={dogLookingBack}
                alt="border-image"
              />
            </div>
            <p className={cx("mobile-description")}>
              나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고
              싶은 모든 것을 한 공간에 저장하세요.
            </p>
          </div>
        </section>

        <section className={cx("section", "sections", "manage-folder-section")}>
          <div className={cx("sub-wrapper")}>
            <h2 className={cx("sub-mention")}>
              링크를 폴더로 <span className={cx("highlight")}>관리</span>
              하세요
            </h2>
            <p className={cx("description")}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
          </div>
          <div className={cx("mobile-content-wrapper")}>
            <div className={cx("image-container")}>
              <Image src={folderNameChangeIcon} alt="manage-popup-image" />
            </div>
            <p className={cx("mobile-description")}>
              나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다.
            </p>
          </div>
        </section>

        <section className={cx("section", "sections", "share-link-section")}>
          <div className={cx("sub-wrapper")}>
            <h2 className={cx("sub-mention")}>
              저장한 링크를 <span className={cx("highlight")}>공유</span>해
              보세요
            </h2>
            <p className={cx("description")}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
          <div className={cx("mobile-content-wrapper")}>
            <div className={cx("image-container")}>
              <Image src={shareFolderIcon} alt="share-popup-image" />
            </div>
            <p className={cx("mobile-description")}>
              여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
              쉽고 빠르게 링크를 공유해 보세요.
            </p>
          </div>
        </section>

        <section className={cx("section", "sections", "search-link-section")}>
          <div className={cx("sub-wrapper")}>
            <h2 className={cx("sub-mention")}>
              저장한 링크를 <span className={cx("highlight")}>검색</span>해
              보세요
            </h2>
            <p className={cx("description")}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </div>
          <div className={cx("mobile-content-wrapper")}>
            <div className={cx("image-container")}>
              <Image src={searchResultIcon} alt="left-top-image" />
            </div>
            <p className={cx("mobile-description")}>
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </p>
          </div>
        </section>
      </main>

      <div className={cx("footer-space")}></div>
      <footer className={cx("footer")}>
        <div className={cx("brand-year")}>ⓒcodeit - 2023</div>
        <div className={cx("policy-and-faq")}>
          <a className={cx("privacy")} href="documents/privacy.html">
            Privacy Policy
          </a>
          <a className={cx("faq")} href="documents/faq.html">
            FAQ
          </a>
        </div>
        <div className={cx("sns-link")}>
          <Link href="https://www.facebook.com" target="_blank">
            <Image src={facebookIcon} alt="facebook-icon" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <Image src={twitterIcon} alt="twitter-icon" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <Image src={youtubeIcon} alt="youtube-icon" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank">
            <Image src={instagramIcon} alt="instagram-icon" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

import "./Card.css";

const formatDate = (date) => {
  const formattedDate = new Date(date);
  return `${formattedDate.getFullYear()}. ${
    formattedDate.getMonth() + 1
  }. ${formattedDate.getDate()}`;
};

const calculateWhenItIsCreated = (createdAt) => {
  const now = new Date();
  const formattedDate = new Date(createdAt);
  const mSecDiff = now.getTime() - formattedDate.getTime();
  const minDiff = Math.floor(mSecDiff / (60 * 1000));
  const hourDiff = Math.floor(minDiff / 60);
  const dayDiff = Math.floor(hourDiff / 24);
  const monthDiff = Math.floor(dayDiff / 30);

  if (minDiff < 2) return "1minute ago";
  else if (minDiff < 60) return `${minDiff}minutes ago`;
  else if (minDiff >= 60 && minDiff < 120) return `1 hour ago`;
  else if (hourDiff >= 2 && hourDiff < 24) return `${hourDiff}hours ago`;
  else if (hourDiff >= 24 && hourDiff < 48) return `1 day ago`;
  else if (dayDiff >=1 && dayDiff < 31) return `${dayDiff} days ago`;
  else if(monthDiff >=1  && monthDiff < 2) return `1 month ago`;
  else if(monthDiff >=2 && monthDiff < 12) return `${monthDiff} months ago`;
  else if(monthDiff >=12 && monthDiff < 24) return `1 year ago`;
  else return `${Math.floor(dayDiff/365)} years ago`;
};

export default function Card({ link, alt }) {
  const { createdAt, url, description, imageSource } = link;
  const formattedDate = formatDate(createdAt);
  const timeAgo = calculateWhenItIsCreated(createdAt);

  return (
    <div className="card" onClick={() => window.open(url, "_blank")}>
      <div className="card-img-container">
        <img className="card-img" src={imageSource ?? alt} alt="card-img"></img>
      </div>
      <div className="mention-wrapper">
        <p className="upload-time-ago">{timeAgo}</p>
        <p className="description">{description}</p>
        <p className="upload-date">{formattedDate}</p>
      </div>
    </div>
  );
}
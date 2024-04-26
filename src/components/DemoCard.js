import { isMobile } from "../utils";


export default function TitleCard({title, videoURL, imgURL, linkURL, description}) {

  function visitLink() {
    if(linkURL){
      window.open(linkURL, "_blank");
    }
  }

  function getCardClass() {
    let cardClass = "demoCard";
    if (linkURL) {
      cardClass += " clickable";
    }
    if (isMobile()) {
      cardClass += " mobile";
    }
    return cardClass;
  }

  return (
    <div className={getCardClass()} onClick={!videoURL && visitLink}>
      <div className="title" onClick={videoURL && visitLink}>
        {title}
      </div>
      <div className="thumbnail">
        {videoURL && <video src={videoURL} controls className="videoPlayer"></video>}
        {imgURL && <img src={imgURL} alt="Demo Thumbnail" className="projectThumb"/>}
      </div>
      <div className="description" onClick={videoURL && visitLink}>
        {description}
      </div>
    </div>
  );
}
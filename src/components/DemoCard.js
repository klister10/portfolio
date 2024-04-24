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
    return cardClass;
  }

  return (
    <div className={getCardClass()} onClick={visitLink}>
      <div className="title">
        {title}
      </div>
      <div className="thumbnail">
        {videoURL && <video src={videoURL} controls className="videoPlayer"></video>}
        {imgURL && <img src={imgURL} alt="Demo Thumbnail" className="projectThumb"/>}
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}
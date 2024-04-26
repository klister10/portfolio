import { isMobile } from "../utils";

export default function TitleCard() {

  const titleCardClass = isMobile() ? "titleCard mobile" : "titleCard";

  return (
    <div className={titleCardClass}>
      <div className="name">
        <div className="first">Kathleen</div>
        <div className="last">Lister-Perlman</div>
      </div>
      <img className="profilePhoto" src={"/assets/profile_photo.jpg"} alt="Profile Photo" />
    </div>
  );
}
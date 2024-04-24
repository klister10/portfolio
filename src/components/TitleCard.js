export default function TitleCard() {

  return (
    <div className="titleCard">
      <div className="name">
        <div className="first">Kathleen</div>
        <div className="last">Lister-Perlman</div>
      </div>
      <img className="profilePhoto" src={require("../assets/profile_photo.jpg")} alt="Profile Photo" />
    </div>
  );
}
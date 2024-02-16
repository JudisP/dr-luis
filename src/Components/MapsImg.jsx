import { abreGoogleMaps } from "@/utils/helpers";
import { RiFullscreenFill } from "react-icons/ri";

const MapsImg = () => {
  return (
    <div className="container-maps">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sitedrluis.appspot.com/o/localiza%C3%A7%C3%A3o.png?alt=media&token=2bcb3755-c82f-4d4c-85bd-910a7a718716"
        alt="Maps"
        onClick={abreGoogleMaps}
      />

      <div className="background-icon" onClick={abreGoogleMaps}>
        <RiFullscreenFill onClick={abreGoogleMaps} />
      </div>
    </div>
  );
};

export default MapsImg;

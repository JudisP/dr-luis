import { abreGoogleMaps } from "@/utils/helpers";
import { RiFullscreenFill } from "react-icons/ri";

const MapsImg = () => {
  return (
    <div className="container-maps">
      <img
        src="https://drive.google.com/uc?export=view&id=1g8MrXlPhSJmmA7k__kBAUvPt9m5qgLTV"
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

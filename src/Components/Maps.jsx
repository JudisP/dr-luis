import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapMarkerStarOutlineIcon from 'mdi-react/ChevronRightIcon';
import { PropTypes } from 'prop-types';

const Maps = (props) => {
  const mapData = {
    coordenadas: {
      lat: -15.813798268453715,
      lng: -47.91307070805736,
    },
    zoom: 13,
  };

  return (
    <Map
      google={props.google}
      initialCenter={{
        lat: mapData.coordenadas.lat,
        lng: mapData.coordenadas.lng,
      }}
      className="mapa"
    >
      <Marker
        position={{
          lat: mapData.coordenadas.lat,
          lng: mapData.coordenadas.lng,
        }}
        animation={props.google.maps.Animation.BOUNCE}
        className="marcador"
      >
        <MapMarkerStarOutlineIcon />
      </Marker>
    </Map>
  );
};

Maps.propTypes = {
  google: PropTypes.object,
  latitude: PropTypes.string,
  longitude: PropTypes.string,
};

export default GoogleApiWrapper({
  apiKey: import.meta.env.VITE_MAPS_KEY,
})(Maps);


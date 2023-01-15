import React from "react";
import { useSelector } from "react-redux";
import { vesselsShown } from "models/vessels";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  MarkerClusterer,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: 37.9838,
  lng: 23.7275,
};

function VesselsMap() {
  const vesselsShownSelector = useSelector(vesselsShown);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const options = {
    imagePath: "",
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerClusterer options={options}>
        {(clusterer) =>
          vesselsShownSelector?.map((item) => (
            <Marker
              key={item["TIMESTAMP"]}
              position={{
                lat: Number(item["LAT"]),
                lng: Number(item["LON"]),
              }}
              clusterer={clusterer}
            >
              <InfoWindow
                position={{
                  lat: Number(item["LAT"]),
                  lng: Number(item["LON"]),
                }}
                visible={false}
              >
                <>
                  <p>{`Course: ${item["COURSE"]}`}</p>
                  <p>{`Heading: ${item["HEADING"]}`}</p>
                  <p>{`Ship ID: ${item["SHIP_ID"]}`}</p>
                  <p>{`Speed: ${item["SPEED"]}`}</p>
                  <p>{`Status: ${item["STATUS"]}`}</p>
                  <p>{`Timestamp: ${item["TIMESTAMP"]}`}</p>
                  {item["WIND_ANGLE"] && (
                    <p>{`Wind Angle: ${item["WIND_ANGLE"]}`}</p>
                  )}
                  {item["WIND_SPEED"] && (
                    <p>{`Wind Speed: ${item["WIND_SPEED"]}`}</p>
                  )}
                  {item["WIND_TEMP"] && (
                    <p>{`Wind Temperature: ${item["WIND_TEMP"]}`}</p>
                  )}
                </>
              </InfoWindow>
            </Marker>
          ))
        }
      </MarkerClusterer>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(VesselsMap);

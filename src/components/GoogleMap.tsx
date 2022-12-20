import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import * as React from "react";

const GMap: React.FunctionComponent = () => {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyAv12djqjUud5Sjl5VlETesIcW38XSJMhc", //process.env.REACT_APP_GMAP_API_KEY as string,
	});

	const center = React.useMemo(() => ({ lat: 20.144444, lng: 92.896942 }), []);

	return isLoaded ? (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			<Marker position={center} />
		</GoogleMap>
	) : (
		<div>"Loading Google Maps ..."</div>
	);
};

export default GMap;

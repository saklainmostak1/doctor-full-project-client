import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
 
    height: "60vh",

};

const center = {
    lat: 23.745307744707024,
    lng: 90.34785554096965,
};

function MyComponent() {
    return (
        <div className='max-w-[1440px]'>
            <LoadScript
                googleMapsApiKey={process.env.REACT_GOOGLE_MAP_API_KEY}
            >
                <GoogleMap
                
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                    <Marker
                        position={center}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default React.memo(MyComponent)
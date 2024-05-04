import React, { useEffect, useState } from 'react';

const GeolocationComponent = () => {
  const [locationData, setLocationData] = useState({
    country: '',
    state: '',
    city: '',
    latitude: '',
    longitude: '',
    ip: '',
  });

  useEffect(() => {
    $.ajax({
      url: "https://geolocation-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function(location) {
        setLocationData({
          country: location.country_name,
          state: location.state,
          city: location.city,
          latitude: location.latitude,
          longitude: location.longitude,
          ip: location.IPv4,
        });
      }
    });
  }, []);

  return (
    <div>
         <div>IP: <span>{locationData.ip}</span></div>
    </div>
  );
};

export default GeolocationComponent;

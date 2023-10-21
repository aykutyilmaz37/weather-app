import React, { useState, useEffect } from 'react';

type FetchLocationState = {
  loading: boolean;
  resp: any;
  error: any;
};

const useGeoLocation = () => {
  const [data, setData] = useState<FetchLocationState>({
    loading: true,
    error: null,
    resp: null,
  });
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      setData({
        resp: null,
        loading: false,
        error: 'Geolocation not supported',
      });
      console.log('Geolocation not supported');
    }
  };

  const success = (position: any) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setData({ resp: { latitude, longitude }, loading: false, error: null });
  };

  const error = () => {
    setData({
      resp: null,
      loading: false,
      error: 'Geolocation not supported',
    });
    console.log('Unable to retrieve your location');
  };

  useEffect(() => {
    getLocation();
  }, []);

  return [data.resp, data.loading,data.error];
};

export default useGeoLocation;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import useGeoLocation from 'services/hooks/useGeoLocation';
import { Loading } from 'components';
import LocationInfo from './LocationInfo';
import HeatSwitcher from './HeatSwitcher';
import HourlyStatus from './HourlyStatus';
import useFetchLazyApi from 'services/hooks/useFetchLazyApi';
import { API_KEY, API_URL } from 'services/constants/apiUrl';
import { GET_WEATHER } from 'store/app/types';
import { useInterval } from 'services/hooks/useInterval';

const WeatherCard = () => {
  const dispatch = useDispatch();
  const [coordinates, coordinatesLoading] = useGeoLocation();
  const [fetchWeather, weatherData] = useFetchLazyApi(`${API_URL}`);

  useEffect(() => {
    (async () => {
      if (coordinates !== null) {
        const resp = await fetchWeather({
          key: API_KEY,
          q: `${coordinates.latitude},${coordinates.longitude}`,
          days: 1,
        });
        if (resp) {
          dispatch({
            type: GET_WEATHER,
            payload: resp,
          });
        }
      }
    })();
  }, [coordinates]);

  useInterval(() => {
    (async () => {
      await fetchWeather({
        key: API_KEY,
        q: `${coordinates.latitude},${coordinates.longitude}`,
        days: 1,
      });
    })();
  }, 10000);

  return (
    <div className='w-full border rounded-sm p-4 bg-white flex flex-column justify-center items-center'>
      {coordinatesLoading && !weatherData ? (
        <Loading />
      ) : (
        <div className='w-full'>
          <div className='flex justify-between flex-wrap mb-4'>
            <div>
              <LocationInfo />
            </div>
            <div>
              <HeatSwitcher />
            </div>
          </div>
          <div>
            <HourlyStatus />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

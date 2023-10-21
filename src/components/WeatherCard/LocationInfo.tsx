import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';

const LocationInfo = () => {
  const weather = useSelector((state: RootState) => state.app.weather);

  if (!weather) return null;
  return (
    <div className='flex flex-col'>
      <div className='text-md font-bold'>{weather.current.condition.text}</div>
      <div className='text-sm'>
        <span className='mr-2'>{weather.location.region},{weather.location.name}</span>
        <span>Last Updated: {moment(weather.current.last_updated).format('DD-MM-YYYY HH:mm:ss')}</span></div>
    </div>
  );
};

export default LocationInfo;

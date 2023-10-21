import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/rootReducer';
import moment from 'moment';

const HourlyStatus = () => {
  const weather = useSelector((state: RootState) => state.app.weather);
  const heatValue = useSelector((state: RootState) => state.app.heatValue);

  if (!weather) return null;
  return (
    <div className='flex'>
      {weather.forecast.forecastday.map(
        (forecastDayItem: any, forecastDayKey: number) => {
          return (
            <ul
              className='flex justify-between w-screen overflow-x-auto'
              key={forecastDayKey}
            >
              {forecastDayItem.hour.map((hourItem: any, hourKey: number) => {
                const selectedTime =
                  moment(hourItem.time).format('HH:00') ===
                  moment(new Date()).format('HH:00');
                return (
                  <li
                    key={hourKey}
                    className='flex flex-col justify-center items-center flex-shrink-0 basis-24 lg:basis-16'
                  >
                    <div
                      className={`${
                        selectedTime ? 'text-sm font-bold' : 'text-[10px]'
                      } mb-2 whitespace-nowrap`}
                    >
                      {moment(hourItem.time).format('hh:mm A')}
                    </div>
                    <div className='mb-2'>
                      <img
                        src={hourItem.condition.icon}
                        alt={hourItem.condition.text}
                      />
                    </div>
                    <div
                      className={`${
                        selectedTime ? 'text-md font-bold' : 'text-sm'
                      }`}
                    >
                      {hourItem[heatValue]}°
                    </div>
                  </li>
                );
              })}
            </ul>
          );
        }
      )}
    </div>
  );
};

export default HourlyStatus;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_HEAT_VALUE } from 'store/app/types';
import { RootState } from 'store/rootReducer';

const HeatSwitcher = () => {
  const dispatch = useDispatch();
  const weather = useSelector((state: RootState) => state.app.weather);
  const heatValue = useSelector((state: RootState) => state.app.heatValue);


  const onHeatSwitch = (value: string) => {
    dispatch({
        type: SET_HEAT_VALUE,
        payload: value,
    })
  };

  if (!weather) return null;
  return (
    <div className='inline-flex rounded-md shadow-sm' role='group'>
      <button
        onClick={() => onHeatSwitch('temp_c')}
        type='button'
        className={`${
            heatValue === 'temp_c' ? 'bg-[#3a205a]' : 'bg-[#6b38a8]'
        } px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-l-lg hover:bg-[#47266f]`}
      >
        C°
      </button>
      <button
        onClick={() => onHeatSwitch('temp_f')}
        type='button'
        className={`${
            heatValue === 'temp_f' ? 'bg-[#3a205a]' : 'bg-[#6b38a8]'
        } px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-r-md hover:bg-[#47266f]`}
      >
        F°
      </button>
    </div>
  );
};

export default HeatSwitcher;

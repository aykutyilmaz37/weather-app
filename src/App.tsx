import React from 'react';
import './styles.css';
import { WeatherCard } from 'components';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='w-full p-4 h-screen bg-[#6b38a8]'>
        <WeatherCard />
      </div>
    </Provider>
  );
};

export default App;

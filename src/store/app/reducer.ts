import { GET_WEATHER, SET_HEAT_VALUE,
} from './types';

const initialState = {
  weather: null,
  heatValue: 'temp_c'
};

const appReducer = (state = initialState, { type, payload }: any = {}) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: payload,
      };
      case SET_HEAT_VALUE:
        return {
          ...state,
          heatValue: payload,
        };
    default:
      return state;
  }
};

export default appReducer;
